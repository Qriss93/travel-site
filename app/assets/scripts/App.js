import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();


/*
var $ = require('jquery')
import Person from './modules/Person';

class Adult extends Person {
    
    payTaxes(){
        
        console.log("no ypu can pay taxes juhu");
        
    }
    
}

//alert("test webpack automation 123 87565756");

var john = new Person("john done", "blue");
john.greet();
var jane = new Adult("jane smith", "orange");
jane.greet();
jane.payTaxes();

$('h1').remove();
*/