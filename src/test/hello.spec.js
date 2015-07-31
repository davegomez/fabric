import {test} from "tape";
import {greetings} from "../js/hello";

test("Greetings the developer", t => {
  t.plan(2);
  t.equal(greetings("Dave"), "Hello Dave, this your first program with fabric!", "Greetings should be equal");
  t.equal(greetings("Dave"), "Hello Dave, ths your first program with fabric!", "Greetings should be equal");
  //t.equal(greetings("Dave"), "ello Dave, this your first program with fabric!");
  t.end();
});

test("Greetings the developer", t => {
  t.plan(1);
  t.equal(greetings("Dave"), "Hello Dave, this your first program with fabric!");
  t.end();
});