import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
declare var $: any;

export interface Article {
  designation: string;
  id: number;
  price: number;
  photo:string;

}



const ELEMENT_DATA: Article[] = [
  {id:1, designation:"Xperia", price:250, photo:"assets/images/Articles/xperia.png"},
  {id:2, designation:"Samsung", price:150,photo:"assets/images/Articles/samsung-galaxy-s10-2019-frandroid.png"},

  {id:3, designation:"Nokia", price:650,photo:"assets/images/Articles/nokia-8-1-2018-fr.png"},
  {id:4, designation:"Xperia", price:250, photo:"assets/images/Articles/xperia.png"},
  {id:5, designation:"Samsung", price:150,photo:"assets/images/Articles/samsung-galaxy-s10-2019-frandroid.png"},

  {id:6, designation:"Nokia", price:650,photo:"assets/images/Articles/nokia-8-1-2018-fr.png"},
  {id:7, designation:"Xperia", price:250, photo:"assets/images/Articles/xperia.png"},
  {id:8, designation:"Samsung", price:150,photo:"assets/images/Articles/samsung-galaxy-s10-2019-frandroid.png"},

  {id:9, designation:"Nokia", price:650,photo:"assets/images/Articles/nokia-8-1-2018-fr.png"},



];
//------------------------------------------------->


@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css']
})
export class AdminArticlesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'designation', 'photo', 'price','update','delete'];
  dataSource = new MatTableDataSource<Article>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    //JQuery
    $(document).ready(function(){
      $('.materialboxed').materialbox();
      alert('ok !');
    });


    //TypeScript
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onUpdateClient(id){
    console.log("Update "+id);
    console.log();
  }

  onDeleteClient(position){
    console.log("Delete "+position);
    console.log();
  }

}
