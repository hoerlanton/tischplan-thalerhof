import {Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-departmentmenu',
  templateUrl: 'departmentmenu.component.html',
  styleUrls: ['departmentmenu.component.css']
})
export class DepartmentmenuComponent implements AfterViewInit {

  @Input('buttonBgColor1') buttonBgColor1: string;
  @Input('buttonBgColor2') buttonBgColor2: string;
  @Input('buttonBgColor3') buttonBgColor3: string;
  @Input('buttonBgColor4') buttonBgColor4: string;
  @Input('buttonBgColor5') buttonBgColor5: string;
  @Input('fontColor1') fontColor1: string;
  @Input('fontColor2') fontColor2: string;
  @Input('fontColor3') fontColor3: string;
  @Input('fontColor4') fontColor4: string;
  @Input('fontColor5') fontColor5: string;
  @Input('showWeinstubeBool') showWeinstubeBool: boolean;
  @Input('showBarBool') showBarBool: boolean;
  @Input('showTerasseBool') showTerasseBool: boolean;
  @Input('showSpeisesaalBool') showSpeisesaalBool: boolean;
  @Input('showAllBool') showAllBool: boolean;
  @Output() showTerasseBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showWeinstubeBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showBarBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showSpeisesaalBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showAllBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Input('buttonBgColorInfoForm') buttonBgColorInfoForm: string;
  @Input('fontColorInfoForm') fontColorInfoForm: string;
  @Input('fontColorNoteForm') fontColorNoteForm: string;
  @Input('buttonBgColorNoteForm') buttonBgColorNoteForm: string;
  @Input('buttonBgColorShowTablePlan') buttonBgColorShowTablePlan: string;
  @Input('fontColorShowTablePlan') fontColorShowTablePlan: string;
  @Input('showNoteFormBool') showNoteFormBool: boolean;
  @Input('showInfoFormBool') showInfoFormBool: boolean;
  @Input('showTablePlanBool') showTablePlanBool: boolean;
  @Output() showNoteFormBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showInfoFormBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showTablePlanBoolChange: EventEmitter<boolean> = new EventEmitter();
  showDepartments: boolean;
  buttonBgColorDropdownToggle: string;
  constructor() {
    this.showDepartments = true;
    this.buttonBgColorShowTablePlan = "0a7a74";
    this.buttonBgColorInfoForm = "0a7a74";
    this.buttonBgColorNoteForm = "0a7a74";
    this.buttonBgColorDropdownToggle = "0a7a74";
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
    showTerasse() {
      //console.log("showTerasse!");

      this.showTerasseBool = true;
      this.showWeinstubeBool = false;
      this.showBarBool = false;
      this.showSpeisesaalBool = false;
      this.showAllBool = false;
      this.showDepartments = false;

      if (this.buttonBgColor1 === "154846") {
        this.buttonBgColor1 = "0d2f2e";
        this.buttonBgColor2 = "0a7a74";
        this.buttonBgColor3 = "0a7a74";
        this.buttonBgColor4 = "0a7a74";
        this.buttonBgColor5 = "0a7a74"
      } else {
        this.buttonBgColor1 = "0a7a74";
      }
      if (this.fontColor1 === "f3efe4") {
        this.fontColor1 = "0a7a74";
        this.fontColor2 = "f3efe4";
        this.fontColor3 = "f3efe4";
        this.fontColor4 = "f3efe4";
        this.fontColor5 = "f3efe4"
      } else {
        this.fontColor1 = "f3efe4";
      }
      this.showTerasseBoolChange.emit(this.showTerasseBool);
      this.showBarBoolChange.emit(this.showBarBool);
      this.showWeinstubeBoolChange.emit(this.showWeinstubeBool);
      this.showSpeisesaalBoolChange.emit(this.showSpeisesaalBool);
      this.showAllBoolChange.emit(this.showAllBool);
    }

    showWeinstube() {
      //console.log("showWeinstube!");
      this.showTerasseBool = false;
      this.showWeinstubeBool = true;
      //console.log(this.showWeinstubeBool);
      this.showBarBool = false;
      this.showSpeisesaalBool = false;
      this.showAllBool = false;
      this.showDepartments = false;

      if (this.buttonBgColor2 === "154846") {
        this.buttonBgColor2 = "0d2f2e";
        this.buttonBgColor1 = "0a7a74";
        this.buttonBgColor3 = "0a7a74";
        this.buttonBgColor4 = "0a7a74";
        this.buttonBgColor5 = "0a7a74"
      } else {
        this.buttonBgColor2 = "0a7a74";
      }
      if (this.fontColor2 === "f3efe4") {
        this.fontColor2 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor3 = "f3efe4";
        this.fontColor4 = "f3efe4";
        this.fontColor5 = "f3efe4"

      } else {
        this.fontColor2 = "f3efe4";
      }
      this.showWeinstubeBoolChange.emit(this.showWeinstubeBool);
      this.showTerasseBoolChange.emit(this.showTerasseBool);
      this.showBarBoolChange.emit(this.showBarBool);
      this.showSpeisesaalBoolChange.emit(this.showSpeisesaalBool);
      this.showAllBoolChange.emit(this.showAllBool);
    }

    showBar() {
      //console.log("showBar!");
      this.showTerasseBool = false;
      this.showWeinstubeBool = false;
      this.showBarBool = true;
      this.showSpeisesaalBool = false;
      this.showAllBool = false;
      this.showDepartments = false;

      if (this.buttonBgColor3 === "154846") {
        this.buttonBgColor3 = "0d2f2e";
        this.buttonBgColor1 = "0a7a74";
        this.buttonBgColor2 = "0a7a74";
        this.buttonBgColor4 = "0a7a74";
        this.buttonBgColor5 = "0a7a74"
      } else {
        this.buttonBgColor3 = "0a7a74";
      }
      if (this.fontColor3 === "f3efe4") {
        this.fontColor3 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor2 = "f3efe4";
        this.fontColor4 = "f3efe4";
        this.fontColor5 = "f3efe4"
      } else {
        this.fontColor3 = "f3efe4";
      }
      this.showBarBoolChange.emit(this.showBarBool);
      this.showTerasseBoolChange.emit(this.showTerasseBool);
      this.showWeinstubeBoolChange.emit(this.showWeinstubeBool);
      this.showSpeisesaalBoolChange.emit(this.showSpeisesaalBool);
      this.showAllBoolChange.emit(this.showAllBool);
    }

    showSpeisesaal() {
      //console.log("showSpeisesaal!");
      this.showTerasseBool = false;
      this.showWeinstubeBool = false;
      this.showBarBool = false;
      this.showSpeisesaalBool = true;
      this.showAllBool = false;
      this.showDepartments = false;

      if (this.buttonBgColor4 === "154846") {
        this.buttonBgColor4 = "0d2f2e";
        this.buttonBgColor1 = "0a7a74";
        this.buttonBgColor2 = "0a7a74";
        this.buttonBgColor3 = "0a7a74";
        this.buttonBgColor5 = "0a7a74"
      } else {
        this.buttonBgColor4 = "0a7a74";
      }
      if (this.fontColor4 === "f3efe4") {
        this.fontColor4 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor2 = "f3efe4";
        this.fontColor3 = "f3efe4";
        this.fontColor5 = "f3efe4"
      } else {
        this.fontColor4 = "f3efe4";
      }
      this.showSpeisesaalBoolChange.emit(this.showSpeisesaalBool);
      this.showTerasseBoolChange.emit(this.showTerasseBool);
      this.showBarBoolChange.emit(this.showBarBool);
      this.showWeinstubeBoolChange.emit(this.showWeinstubeBool);
      this.showAllBoolChange.emit(this.showAllBool);
    }
  showAll() {
    //console.log("showAll!");
    this.showTerasseBool = false;
    this.showWeinstubeBool = false;
    this.showBarBool = false;
    this.showSpeisesaalBool = false;
    this.showAllBool = true;
    this.showDepartments = false;

    if (this.buttonBgColor5 === "154846") {
      this.buttonBgColor5 = "0d2f2e";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor4 = "0a7a74"
    } else {
      this.buttonBgColor5 = "0a7a74";
    }
    if (this.fontColor5 === "f3efe4") {
      this.fontColor5 = "0a7a74";
      this.fontColor1 = "f3efe4";
      this.fontColor2 = "f3efe4";
      this.fontColor3 = "f3efe4";
      this.fontColor4 = "f3efe4"
    } else {
      this.fontColor5 = "f3efe4";
    }
    this.showSpeisesaalBoolChange.emit(this.showSpeisesaalBool);
    this.showTerasseBoolChange.emit(this.showTerasseBool);
    this.showBarBoolChange.emit(this.showBarBool);
    this.showWeinstubeBoolChange.emit(this.showWeinstubeBool);
    this.showAllBoolChange.emit(this.showAllBool);
  }
  showInfoForm() {
    console.log("showTraceForm!");

    this.showNoteFormBool = false;
    this.showInfoFormBool = true;
    this.showTablePlanBool = false;

    if (this.buttonBgColorInfoForm === "154846") {
      this.buttonBgColorInfoForm = "0d2f2e";
      this.buttonBgColorNoteForm = "0a7a74";
      this.buttonBgColorShowTablePlan = "0a7a74";
    } else {
      this.buttonBgColorInfoForm = "0a7a74";
    }
    if (this.fontColorInfoForm === "f3efe4") {
      this.fontColorInfoForm = "0a7a74";
      this.fontColorNoteForm = "f3efe4";
      this.fontColorShowTablePlan = "f3efe4";
    } else {
      this.fontColorInfoForm = "f3efe4";
    }
    this.showNoteFormBoolChange.emit(this.showNoteFormBool);
    this.showInfoFormBoolChange.emit(this.showInfoFormBool);
    this.showTablePlanBoolChange.emit(this.showTablePlanBool);
  }

  showNoteForm() {
    //console.log("showNoteForm!");
    this.showNoteFormBool = true;
    this.showTablePlanBool = false;
    this.showInfoFormBool = false;

    if (this.buttonBgColorNoteForm === "154846") {
      this.buttonBgColorNoteForm = "0d2f2e";
      this.buttonBgColorInfoForm = "0a7a74";
      this.buttonBgColorShowTablePlan = "0a7a74";
    } else {
      this.buttonBgColorNoteForm = "0a7a74";
    }
    if (this.fontColorNoteForm === "f3efe4") {
      this.fontColorNoteForm = "0a7a74";
      this.fontColorInfoForm = "f3efe4";
      this.fontColorShowTablePlan = "f3efe4";
    } else {
      this.fontColorNoteForm = "f3efe4";
    }
    this.showNoteFormBoolChange.emit(this.showNoteFormBool);
    this.showInfoFormBoolChange.emit(this.showInfoFormBool);
    this.showTablePlanBoolChange.emit(this.showTablePlanBool);
  }
  showTablePlan(){
    //console.log("showTablePlan!");
    this.showNoteFormBool = false;
    this.showTablePlanBool = true;
    this.showInfoFormBool = false;

    if (this.buttonBgColorShowTablePlan = "154846") {
      this.buttonBgColorShowTablePlan = "0d2f2e";
      this.buttonBgColorNoteForm = "0a7a74";
      this.buttonBgColorInfoForm = "0a7a74";
    } else {
      this.buttonBgColorShowTablePlan = "0a7a74";
    }
    if (this.fontColorShowTablePlan = "f3efe4") {
      this.fontColorShowTablePlan = "0a7a74";
      this.fontColorNoteForm = "f3efe4";
      this.fontColorInfoForm = "f3efe4";
    } else {
      this.fontColorShowTablePlan = "0a7a74";
    }
    this.showNoteFormBoolChange.emit(this.showNoteFormBool);
    this.showInfoFormBoolChange.emit(this.showInfoFormBool);
    this.showTablePlanBoolChange.emit(this.showTablePlanBool);
  }

  mouseEnterShowInfoForm() {
    //console.log("mouse enter : ");
    if (this.buttonBgColorInfoForm === "0a7a74") {
      //console.log('mouse enter1 :');
      this.buttonBgColorInfoForm = "154846";
    }
  }

  mouseLeaveShowInfoForm() {
    if (this.buttonBgColorInfoForm === "0a7a74") {
      //console.log('mouse leave1 :');
      this.buttonBgColorInfoForm = "154846";
    } else if (this.buttonBgColorInfoForm === "154846") {
      //console.log('mouse leave2 :');
      this.buttonBgColorInfoForm = "0a7a74";
    }
  }

  mouseEnterShowNoteForm() {
    //console.log("mouse enter : ");
    if (this.buttonBgColorNoteForm === "0a7a74") {
      //console.log('mouse enter1 :');
      this.buttonBgColorNoteForm = "154846";
    }
  }

  mouseLeaveShowNoteForm() {
    if (this.buttonBgColorNoteForm === "0a7a74") {
      //console.log('mouse leave1 :');
      this.buttonBgColorNoteForm = "154846";
    } else if (this.buttonBgColorNoteForm === "154846") {
      //console.log('mouse leave2 :');
      this.buttonBgColorNoteForm = "0a7a74";
    }
  }

  mouseEnterShowTablePlan() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColorShowTablePlan === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColorShowTablePlan = "154846";
    }
  }

  mouseLeaveShowTablePlan() {
    if (this.buttonBgColorShowTablePlan === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColorShowTablePlan = "154846";
    } else if (this.buttonBgColorShowTablePlan === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColorShowTablePlan = "0a7a74";
    }
  }


  mouseEnterDropdownToggle() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColorDropdownToggle === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColorDropdownToggle = "154846";
    }
  }

  mouseLeaveDropdownToggle() {
    if (this.buttonBgColorDropdownToggle === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColorDropdownToggle = "154846";
    } else if (this.buttonBgColorDropdownToggle === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColorDropdownToggle = "0a7a74";
    }
  }


  mouseEnterTerasse() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor1 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor1 = "154846";
    }
  }

  mouseLeaveTerasse() {
    if (this.buttonBgColor1 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor1 = "154846";
    } else if (this.buttonBgColor1 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor1 = "0a7a74";
    }
  }

  mouseEnterWeinstube() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor2 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor2 = "154846";
    }
  }

  mouseLeaveWeinstube() {
    if (this.buttonBgColor2 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor2 = "154846";
    } else if (this.buttonBgColor2 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor2 = "0a7a74";
    }
  }

  mouseEnterBar() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor3 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor3 = "154846";
    }
  }

  mouseLeaveBar() {
    if (this.buttonBgColor3 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor3 = "154846";
    } else if (this.buttonBgColor3 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor3 = "0a7a74";
    }
  }

  mouseEnterSpeisesaal() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor4 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor4 = "154846";
    }
  }

  mouseLeaveSpeisesaal() {
    if (this.buttonBgColor4 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor4 = "154846";
    } else if (this.buttonBgColor4 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor4 = "0a7a74";
    }
  }

  mouseEnterAll() {
    //console.log("mouse enter mouseEnterShowTablePlan: ");
    if (this.buttonBgColor5 === "0a7a74") {
      //console.log('mouse enter1 mouseEnterShowTablePlan:');
      this.buttonBgColor5 = "154846";
    }
  }

  mouseLeaveAll() {
    if (this.buttonBgColor5 === "0a7a74") {
      //console.log('mouse leave1 mouseEnterShowTablePlan:');
      this.buttonBgColor5 = "154846";
    } else if (this.buttonBgColor5 === "154846") {
      //console.log('mouse leave2 mouseEnterShowTablePlan:');
      this.buttonBgColor5 = "0a7a74";
    }
  }
}


