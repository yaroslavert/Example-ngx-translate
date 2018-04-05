import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from './services/data.service';
import { Item } from './interfaces/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public list: Item[] = [];

  constructor(public translate: TranslateService, public dataService: DataService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(
        (datalist: Item[]) => {
          this.list = datalist;
        },
        (err) => {
          console.log('err', err);
        }
      )
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

}
