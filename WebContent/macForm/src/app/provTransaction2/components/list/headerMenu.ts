import { CellComponent, ColumnComponent, ColumnDefinition, EmptyCallback, RowComponent,Tabulator, TabulatorFull, ValueBooleanCallback, ValueVoidCallback } from 'tabulator-tables';
// ---------------- Column Header menu ----------------

//define column header menu as column visibility toggle
export default function headerMenu (this: TabulatorFull) {
    const menu = [];
    const columns = this.getColumns();

    for (let column of columns) {

        //create checkbox element using  icons
        let icon = document.createElement("i");
        icon.classList.add("fa");
        icon.classList.add(column.isVisible() ? "fa-check-square" : "fa-square");

        //build label
        let label = document.createElement("span");
        let title = document.createElement("span");

        title.textContent = " " + column.getDefinition().title;

        label.appendChild(icon);
        label.appendChild(title);

        //create menu item
        menu.push({
            label: label,
            action: function (e : Event) {
                //prevent menu closing
                e.stopPropagation();

                //toggle current column visibility
                column.toggle();

                //change menu item icon
                if (column.isVisible()) {
                    icon.classList.remove("fa-square");
                    icon.classList.add("fa-check-square");
                } else {
                    icon.classList.remove("fa-check-square");
                    icon.classList.add("fa-square");
                }
            }
        });
    }

    return menu;
};