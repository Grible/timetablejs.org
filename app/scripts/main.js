'use strict';

(function(){
	var timetable = new Timetable();
	timetable.setScope(18, 3);

	timetable.addLocations(['Silent Disco', 'Nile', 'Len Room', 'Maas Room', 'Stevo Square', 'Congo Room', 'Dami\'s Garden']);
	timetable.addEvent('Frankadelic', 'Stevo Square', new Date(2015,7,17,19,0), new Date(2015,7,17,20,30));

	var renderer = new Timetable.Renderer(timetable);
	renderer.draw('.timetable');
})()
