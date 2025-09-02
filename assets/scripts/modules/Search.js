import {
    module
} from 'modujs'
import {
    debounce,
    throttle
} from '../utils/tickers'

export default class Search extends module {

    static CLASS = {
        LOADING: 'is-loading',
        SHOW_RESULTS: 'has-results',
    }

    constructor(m) {
        super(m);

        // DOM
        this.$el = this.el
        this.$form = this.$('form')[0]
        this.$input = this.$('input')[0]
        this.$submit = this.$('submit')[0]
        this.$resultsList = this.$('resultsList')[0]

        // Vars
        this.controller = new AbortController()
        this.signal = this.controller.signal
        this.isSearching = false
        this.hasResults = false

        // Events
        this.events = {
            click: {
                viewAll: 'submit'
            }
        }
    }

    init() {
        // Set initial submit state
        this.enableSubmit(this.$input.value)

        this.onInputStart = throttle(() => {
            this.enableSubmit(this.$input.value)
            this.$el.classList.add(Search.CLASS.LOADING)
        }, 1000)

        this.onInputEnd = debounce(() => {
            this.search()
        }, 1000)

        this.$input.addEventListener('input', this.onInputStart)
        this.$input.addEventListener('input', this.onInputEnd)
    }

    search() {
        const keyword = this.$input.value

        if (!keyword || keyword === '') {
            this.hideResults()
            this.$el.classList.remove(Search.CLASS.LOADING)
            return
        }

        // // Prevent duplicate searches
        // if (keyword === app.search.last_keyword) {
        //     var search_list = input.parents('form').find('.search_list-wrapper');

        //     search_list.parent().addClass('is-active');
        //     $(document).bind('focusin.namespace click.namespace', function (e) {
        //         // If close target IS a search_list OR a input[name=keyword], KEEP IT.
        //         if ($(e.target).closest('.search_list, input[name=keyword]').length) {
        //             return;
        //         }
        //         $(document).unbind('focusin.namespace click.namespace');
        //         search_list.parent().removeClass('is-active');

        //     });
        //     return false;
        // }
        // app.search.last_keyword = keyword

        if (this.isSearching) {
            this.controller.abort('New search')
        }

        this.isSearching = true
        this.$el.classList.add(Search.CLASS.LOADING)
        this.$resultsList.innerHTML = ''

        fetch(`api/v1/search/${keyword}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                signal: this.signal,
            })
            .then(r => r.json())
            .then(r => {
                this.isSearching = false
                this.$el.classList.remove(Search.CLASS.LOADING)

                const results = r.filter(result => typeof result.title !== 'undefined' && result.list.length > 0)

                if (results.length === 0) {
                    this.hideResults()
                    return
                }

                let items =
                    results
                    .map(result => result.list)
                    .flat()
                    .filter(item => typeof item.meta.title !== 'undefined' && typeof item.meta.url !== 'undefined')

                for (let item of items) {
                    const li = document.createElement('li')
                    li.innerHTML = `<a class="c-search_results_link" href="${item.meta.url}"><span class="c-search_results_label">${item.meta.title}</span></a>`
                    this.$resultsList.append(li)

                }

                this.showResults()
            })
            .catch((e) => {
                console.error(`Fetch error: ${e.message}`);
            })

        /*
        this.jqXHR = $.get('api/v1/search/' + keyword, {}, function (response) {
            if (response.length) {
                // Search list template
                var search_list = input.parents('form').find('.search_list-wrapper');
                search_list.html('');

                // Create HTML with the response
                var i         = 0;
                var length    = response.length;
                var $keywords = $('.js-search-keyword-all');
                $keywords.hide();

                if (!(length >= 1)) {
                    return false;
                }

                for (; i < length; i++) {
                    var c = response[i];
                    if (typeof c.title === 'undefined' || typeof c.list === 'undefined') {
                        continue;
                    }
                    if (!c.list.length) {
                        continue;
                    }

                    var ul    = $('<ul />');
                    var k     = 0;
                    var count = c.list.length;

                    for (; k < count; k++) {
                        var obj = c.list[k];
                        if (typeof obj.meta.title === 'undefined' || typeof obj.meta.url === 'undefined') {
                            return false;
                        }
                        var li = $('<li><a href="' + obj.meta.url + '">' + obj.meta.title + '</a></li>');
                        ul.append(li);

                        $keywords.show();
                        $keywords.text("Voir plus de résultats");
                    }

                    search_list.append(ul);
                }

                search_list.parent().addClass('is-active');
                $(document).bind('focusin.namespace click.namespace', function (e) {
                    // If close target IS a search_list OR a input[name=keyword], KEEP IT.
                    if ($(e.target).closest('.search_list, input[name=keyword]').length) {
                        return;
                    }
                    $(document).unbind('focusin.namespace click.namespace');
                    search_list.parent().removeClass('is-active');

                });
            }
        }, 'json');
        */
    }

    showResults() {
        if (this.hasResults) {
            return
        }

        document.addEventListener('click', this.onClick = e => {
            if (!this.$el.contains(e.target)) {
                this.hideResults()
            }
        })

        this.$el.classList.add(Search.CLASS.SHOW_RESULTS)

        this.hasResults = true
    }

    hideResults() {
        if (!this.hasResults) {
            return
        }

        document.removeEventListener('click', this.onClick)

        this.$el.classList.remove(Search.CLASS.SHOW_RESULTS)

        this.hasResults = false
    }

    enableSubmit(inputValue) {
        if (inputValue == null || inputValue == '') {
            this.$submit.disabled = true
        } else {
            this.$submit.disabled = false
        }
    }

    submit() {
        this.$form.submit()
    }

    destroy() {
        this.$input.removeEventListener('input', this.onInput)
    }
}