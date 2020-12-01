import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { takeUntil } from 'rxjs/operators';

import {
  ImageOrVideoPosition,
  ImageOrVideoSizes,
  PageTypes,
} from '../../../interfaces/pageTypes.enum';
import { BaseComponent } from '../base/base.component';

@Directive({ selector: 'video' })
export class Video {
  @Input() id!: string;
}

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent extends BaseComponent
  implements OnInit, AfterViewInit {
  @ViewChild('presentationDiv') presentationDiv: ElementRef;
  @Input() pageConfigs: any;

  lastPage: number;
  page$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  _PageTypes = PageTypes;
  _ImageOrVideoPosition = ImageOrVideoPosition;
  _ImageOrVideoSizes = ImageOrVideoSizes;

  presentationHeight: number;

  backward: boolean = false;
  forward: boolean = false;
  pause: boolean = false;
  play: boolean = false;
  redo: boolean = false;

  // pageConfigs = configs as any;

  background: string;
  video: string;
  autoplay: boolean = false;
  loop: boolean = true;
  videoSize: ImageOrVideoSizes;
  videoPosition: ImageOrVideoPosition;
  videoId: string;
  videoEle: HTMLVideoElement;
  image: string;
  imagePosition: ImageOrVideoPosition;
  imageAlt: string;
  imageSize: ImageOrVideoSizes;
  title: string;
  text: string;
  code: string;
  codeLanguage: string;
  codePosition: ImageOrVideoPosition;
  language: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.page$.next(this.pageConfigs.length);
    this.page$.pipe(takeUntil(this.destroy$)).subscribe((_) => {
      this.backward = this.pageConfigs[this.page].controls.backward || false;
      this.forward = this.pageConfigs[this.page].controls.forward || false;
      this.pause = this.pageConfigs[this.page].controls.pause || false;
      this.play = this.pageConfigs[this.page].controls.play || false;
      this.redo = this.pageConfigs[this.page].controls.redo || false;

      this.background = this.pageConfigs[this.page].meta.background || '';

      const video = this.pageConfigs[this.page].meta.video;
      this.video = video?.source || '';
      this.autoplay = video?.autoplay || false;
      this.videoSize = video?.size || '';
      this.videoPosition = video?.position || '';
      this.loop = video?.loop?.toString() ? video?.loop : true;

      const image = this.pageConfigs[this.page].meta.image || '';
      this.image = image?.source || '';
      this.imagePosition = image?.position || '';
      this.imageAlt = image?.alt || '';
      this.imageSize = image?.size || '';

      const code = this.pageConfigs[this.page].meta.code || '';
      this.code = code?.source || '';
      this.codeLanguage = code.language || 'bash';
      this.codePosition = code?.position || '';

      if (this.pageConfigs[this.page].meta.type === PageTypes.CODEONLY) {
        this.code = this.pageConfigs[this.page].elements.find(
          (el: any) => el.code
        ).code;
        this.language = this.pageConfigs[this.page].elements.find(
          (el: any) => el.language
        ).language;
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.lastPage = this.pageConfigs.length;
      this.presentationHeight =
        this.presentationDiv.nativeElement.offsetWidth * 0.5535;
    }, 0);
  }

  get page() {
    return this.page$.value - 1;
  }

  navigate(sign: string): void {
    const nextPage = eval(`${this.page + 1} ${sign} 1`);
    if (nextPage <= this.lastPage && nextPage >= 1) {
      this.page$.next(nextPage);
    }
  }

  playPause(): void {
    this.videoEle = document.getElementById('video') as HTMLVideoElement;
    const el = this.videoEle;
    if (!el || this.loop) {
      return;
    }
    if (el.paused) {
      el.play();
      this.play = false;
      this.pause = true;
    } else {
      el.pause();
      this.play = true;
      this.pause = false;
    }
  }

  videoEnd(): void {
    this.play = true;
    this.pause = false;
  }

  fullscreen(): void {
    const elem = this.presentationDiv.nativeElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }
}
