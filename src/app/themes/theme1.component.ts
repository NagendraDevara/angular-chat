import { Component } from "@angular/core";
import { Router } from "@angular/router";
import html2canvas from "html2canvas";
import { jsPDF } from 'jspdf';
// import pdfMake from "pdfmake/build/pdfmake";
// import { htmlToPdfmake } from 'html-to-pdfmake';


@Component({
    selector: 'app-component-theme',
    templateUrl: './theme1.component.html',
    styleUrls: ['./theme1.component.scss']
})
export class theme1 {
    resumeSummary: any;
    constructor(private router: Router) {
        const navigation = this.router.getCurrentNavigation();
        let storedResumebj:any =localStorage.getItem('resume');
        this.resumeSummary = navigation?.extras?.state ?  navigation?.extras?.state : JSON.parse(storedResumebj);
        localStorage.setItem('resume',JSON.stringify(this.resumeSummary));
    }
    downloadAsPDF() {
        const doc = new jsPDF();
        // const html = htmlToPdfmake(document.querySelector('#my-content'));
        // const documentDefinition = { content: html };
        // pdfMake.createPdf(documentDefinition).then((pdf) => {
        //   pdf.save('my-document.pdf');
        // });
      }

      convertToImage(){
        var doc = new jsPDF('p','mm',[297, 210]);
        var elementHTML:any = document.querySelector("#pdf-content");

        doc.html((elementHTML), {
            callback: function(doc) {
                // Save the PDF
                doc.save('sample-document.pdf');
            },
            margin: [0, 0, 0, 0],
            autoPaging: 'text',
            x: 0,
            y: 0,
            width: 190, //target width in the PDF document
            windowWidth: 1000 //window width in CSS pixels
        });

      }
}