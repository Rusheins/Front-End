import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input() imagen: string='';
  @Input() nivel: string='';
  @Input() color: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
