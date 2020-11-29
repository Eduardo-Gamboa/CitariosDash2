import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/especialistas",
    title: "Especialistas",
    rtlTitle: "لوحة القيادة",
    icon: "icon-badge",
    class: ""
  },
  {
    path: "/consultorio",
    title: "Consultorio",
    rtlTitle: "الرموز",
    icon: "icon-sound-wave",
    class: ""
  },
  {
    path: "/pacientes",
    title: "Mis pacientes",
    rtlTitle: "خرائط",
    icon: "icon-single-02",
    class: "" },
  {
    path: "/notifications",
    title: "Citas",
    rtlTitle: "إخطارات",
    icon: "icon-calendar-60",
    class: ""
  },

  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
