import {test} from "blue-tape";
import {greetings} from "../js/hello";

test("Greetings the developer", t => {
  t.plan(3);
  t.equal(greetings("Dave"), "Hello Dave, this your first program with fabric!", "Greetings should be equal");
  t.equal(greetings("Dave"), "Hello Dave, this your first program with fabric!", "Greetings should be equal");
  t.equal(greetings("Dave"), "Hello Dave, this your first program with fabric!", "Greetings should be equal");
  t.end();
});

test("Greetings the developer", t => {
  t.plan(1);
  t.equal(greetings("Dave"), "Hello Dave, this your first program with fabric!");
  t.end();
});