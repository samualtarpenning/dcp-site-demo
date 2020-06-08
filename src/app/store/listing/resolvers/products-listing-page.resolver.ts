import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";

import { forkJoin } from "rxjs";



@Injectable()
export class ProductsListingPageResolver implements Resolve<any> {
  constructor() { }

  resolve(route: ActivatedRouteSnapshot) {
    // tslint:disable-next-line: variable-name
    let category_slug: string;
    let tag_slug: string;

    if (route.url[0] && route.url[0].path === "tag") {
      tag_slug = route.params.slug;
    } else if (route.url[0] && route.url[0].path === "category") {
      category_slug = route.params.slug;
    }


  }
}
