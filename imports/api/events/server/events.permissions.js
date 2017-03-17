import {eventsMongo} from "./../events.js";

eventsMongo.allow({
	insert : ()=>{
		return true
	},
	update : ()=>{
		return true
	},
	remove : ()=>{
		return true
	}
})