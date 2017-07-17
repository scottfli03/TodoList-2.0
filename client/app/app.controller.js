class appController {
    constructor() {
      console.log("Entered the App Controller");
      this.name = 'app';
      var self = this;
      self.nav = [{title: "Incomplete",
          urlExt: "incomplete",
          active: false},
        {title: "Completed",
          urlExt: "completed",
          active: false},
        {title: "About",
          urlExt: "about",
          active: false}];
    }
  }

  export default appController;
