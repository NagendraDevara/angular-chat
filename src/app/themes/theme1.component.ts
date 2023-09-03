import { jsPDF } from 'jspdf';
import { Component } from "@angular/core";
import { Router } from "@angular/router";



@Component({
    selector: 'app-component-theme',
    templateUrl: './theme1.component.html',
    styleUrls: ['./theme1.component.scss']
})
export class theme1 {
    resumeSummary: any;
    constructor(private router: Router) {
        const navigation = this.router.getCurrentNavigation();
        this.resumeSummary = navigation?.extras?.state;
    }
    async convertToPdf() {
        console.log(document.getElementById('pdf-content'));

        const pdfContentEl: any = document.getElementById('pdf-content');

        const doc = new jsPDF();

        await doc.html(pdfContentEl.innerHTML).save('test.pdf');
    }
}