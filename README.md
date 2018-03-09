# Radio Button Angular model value binding

Query: Doesn't work with ngModel

This sample works as ng two-way binding support. When value changes occur in the Radiobutton, the corresponding selected Options value updated in paragraph element through ngModel.

Initially we have select a gender through value property,

```ts
Public gender:string = 'male';
```

The corresponding selected option's value updated in paragraph element using ngModel.

```HTML
<form action="" #form="ngForm" (ngSubmit)="logForm(form.value)">
    <ejs-radiobutton label="Male" name="gender" [value]="male" [(ngModel)]="gender"></ejs-radiobutton>
    <ejs-radiobutton label="Female" name="gender" [value]="female" [(ngModel)]="gender"></ejs-radiobutton>
    <p>Form value: {{ form.value | json }}</p>
    <p>Gender Value: {{ gender }}</p>
</form>
```

## Installing and Running Application

### Installing

To install all dependent packages, use the below command

```shell
npm install
```

### Run the application

To compile and run the source files, use the below command

```shell
npm start
```
