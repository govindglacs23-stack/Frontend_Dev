class FormBuilder{
    constructor(fields){
        this.fields=fields;
    }
    renderForm(id){
        const form=document.getElementById(id);
        let html="";
        this.fields.forEach(f=>{
            html+=`<label>${f.label}</label><input type="${f.type}" id="${f.label}"><br>`;
        });
        html+=`<button id="submitBtn">Submit</button>`;
        form.innerHTML=html;
    }
    getFormData(){
        const data={};
        this.fields.forEach(f=>{
            const v=document.getElementById(f.label).value;
            data[f.label]=v;
        });
        return data;
    }
}
