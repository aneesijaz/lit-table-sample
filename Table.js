// Import the LitElement base class and html helper function
import { LitElement, html, css } from "lit-element";

// Extend the LitElement base class
class Table extends LitElement {
  static get properties() {
    return {
      columns: { type: Array },
      rows: {type: Array},
      test:{type:String}
    };
  }

   static get styles() {
    return css`
      td{
        color: red !important;
      }
    `
   }

  constructor(){
    super();

    this.columns = [];
    this.rows = [];
    this.test="";
  }

  firstUpdated(){
  }

  render() {
    let text = "padanisa";
    return html`
      <table border="1" title="${this.test}">
        <thead>
          <tr>
            ${this.columns.map(col => {
              return html`<th>${col}</th>`;
            })}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(row => {
            return html`
            <tr>
              ${this.columns.map(col => {
                return html`
                <td>${row[col] || ''}</td>
                `;
              })}
            </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  }
}
// Register the new element with the browser.
customElements.define("lit-table", Table);
