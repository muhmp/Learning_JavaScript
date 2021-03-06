/**Understand the Hazards of Using Imperative Code


// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  /** 
  const finalTabs = socialWindow.tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  
  console.log(finalTabs.tabs);

  */


  //define window part
   const Window = function(tabs){
     this.tabs = tabs; // keep the record of the array inside the object
   };

   //Join two windows into one window
   Window.prototype.join = function(otherWindow){
     this.tabs = this.tabs.concat(otherWindows.tabs);//merge
     return this;
   };

   //Open and close function
   Window.prototype.tabOpen = function(tab){ //add function
    this.tabs.push('new tab');
    //return
    return this;
   };

  //close
  Window.prototype.tabClose = function(index){

    //define for before and after
        // Only change code below this line
    const tabsBeforeIndex = this.tabs.splice(0,index) //get the paramater of the index
    const tabsAfterIndex = this.tabs.splice(index+1) //change the value

    this.tabs = tabsBeforeIndex.concat //merge tabs + beforeIndex
    //return result
    return this;
  }

  //browser part
 
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  

  const finalTabs = socialWindow.tabOpen().join(videoWindow.tabClose(2)).join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);