'use strict';

(function(){
	var timetable = new Timetable();
	timetable.setScope(18, 3);

	timetable.addLocations(['Silent Disco', 'Nile Room', 'Len Room', 'Maas Room', 'Stevo Square', 'Congo Room', 'Dami\'s Garden', 'Amazone Hall']);

	timetable.addEvent('Gino Duarte', 'Silent Disco', new Date(2015, 7, 17, 18, 15), new Date(2015, 7, 17, 19, 0));
	timetable.addEvent('Chaka Khan', 'Nile Room', new Date(2015, 7, 17, 19, 30), new Date(2015, 7, 17, 21, 30));
	timetable.addEvent('Laura Mvula', 'Len Room', new Date(2015, 7, 17, 22, 15), new Date(2015, 7, 17, 23, 45));
	timetable.addEvent('Frankadelic', 'Stevo Square', new Date(2015, 7, 17, 19, 0), new Date(2015, 7, 17, 20, 30));
	timetable.addEvent('Candi Station', 'Maas Room', new Date(2015, 7, 17, 20, 0), new Date(2015, 7, 17, 20, 40));
	timetable.addEvent('Gregory Porter', 'Maas Room', new Date(2015, 7, 17, 20, 45), new Date(2015, 7, 17, 22, 0));
	timetable.addEvent('Stevie Wonder', 'Stevo Square', new Date(2015, 7, 17, 23, 0), new Date(2015, 7, 18, 0, 45));
	timetable.addEvent('Snarky Puppy', 'Congo Room', new Date(2015, 7, 17, 20, 30), new Date(2015, 7, 18, 2, 15));
	timetable.addEvent('Victor Wooten', 'Dami\'s Garden', new Date(2015, 7, 17, 23, 0), new Date(2015, 7, 18, 0, 45));
	timetable.addEvent('Jam Sessions', 'Amazone Hall', new Date(2015, 7, 18, 0, 30), new Date(2015, 7, 18, 2, 45));

	var renderer = new Timetable.Renderer(timetable);
	renderer.draw('.timetable');
})();
