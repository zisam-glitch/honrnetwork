import {
    module
} from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);

        // UI
        this.$tabs = this.$('tab')
        this.$panels = this.$('panel')

        // Events
        this.events = {
            click: {
                tab: 'onTabClick'
            }
        }
    }

    destroy() {
        super.destroy()
    }

    onTabClick(e) {
        this.setSelectedTab(e.currentTarget)
    }

    setSelectedTab($currentTab) {
        for (let i = 0; i < this.$tabs.length; i += 1) {

            const $tab = this.$tabs[i]
            const $panel = this.$panels[i]

            if ($currentTab === $tab) {
                // Tab
                $tab.setAttribute('aria-selected', 'true')
                $tab.classList.add('is-active')
                $tab.tabIndex = 0

                // Panel
                $panel.removeAttribute('hidden')

            } else {
                // Tab
                $tab.setAttribute('aria-selected', 'false')
                $tab.classList.remove('is-active')
                $tab.tabIndex = -1

                // Panel
                $panel.setAttribute('hidden', '')
            }
        }
    }
}