import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as zc from '@dvsl/zoomcharts';
import { WindowRef } from './../WindowRef';

@Component({
  selector: 'app-zoomcharts',
  template: `<div class="chart-wrapper">
    <div id="chartPieChart" class="chart"></div>
  </div>`
})

export class ZoomchartsComponent implements AfterViewInit {
  // for optimal operation: ref to zc instance
  private zc: any = zc;

  constructor(private winRef: WindowRef) {
    // Add license key
    winRef.nativeWindow.ZoomChartsLicense = '';
    winRef.nativeWindow.ZoomChartsLicenseKey = '';
  }

  ngAfterViewInit() {
    const PieChart = this.zc.PieChart;
    const t = new PieChart({
      container: document.getElementById('chartPieChart'),
      area: { height: 350 },
      data: {
        preloaded: {
          subvalues: [
            {
              id: 'foo', value: 100, subvalues: [
                { id: 'foo-1', value: 50, style: { expandable: false } },
                { id: 'foo-2', value: 50, style: { expandable: false } }
              ]
            },
            { id: 'bar', value: 50, style: { expandable: false } },
            { id: 'baz', value: 30, style: { expandable: false } }
          ]
        }
      }
    });
  }
}

