import {eventsMongo} from "./../events.js";
import eventsDefault from "./events.default";


loadEvents = function(){
	 if (eventsMongo.find({}).fetch().length === 0) {
		 eventsDefault.forEach((item, index)=>{
	     	eventsMongo.insert(eventsDefault[index]); 
		 })
   }
}