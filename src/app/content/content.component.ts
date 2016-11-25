import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { FirebaseObjectObservable } from 'angularfire2';

import { BlogsService } from '../blogs.service';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  blog: FirebaseObjectObservable<Blog>;
  contents: string[];
  // b: Blog;

  constructor(private _blogsService: BlogsService, private _location: Location, private _router: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this._params['id']);
    // console.log(this._router.params['id']);
    // this._subcription = this._router.params.subscribe((param: any) => {
    //   var id = param['id'];
    //   console.log(id);
    // })
    // let id = +this._router.snapshot.params['id'];
    // console.log(id);
    // let b = this._blogsService.getOneBlog(+id);
    // console.log()


    // this.blog = this._blogsService.getBlog();
    // if (this.blog === null) {
    //   this._router.navigate(['/list']);
    //   return;
    // }

    // this.contents = this.blog.content.split('\n');
    this._router.params.subscribe(key => {
      console.log(key['key']);
      this.blog = this._blogsService.getBlog(key['key']);
      // this.blog.subscribe(resp => {
      //   this.b = resp as Blog;
      // });
      //this._blogsService.getBlog(key['key']);
    });

    //console.log(this._router.params['key']);
  }



  goBack() {
    this._location.back();
  }

}
