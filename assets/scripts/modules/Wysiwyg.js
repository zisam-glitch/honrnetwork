import {
    module
} from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);

    }

    init() {
        // Get all tables
        this.$tables = this.el.querySelectorAll("table")

        if (this.$tables.length > 0) {
            // Loop through each table
            this.$tables.forEach(($table) => {
                const table = $table;
                const wrapper = document.createElement('div')

                // Add class
                table.classList.add('c-table')
                wrapper.classList.add('c-table_wrap')

                // Insert the wrapper before the table
                table.parentNode.insertBefore(wrapper, table);
                wrapper.appendChild(table);
            })
        }
    }
}