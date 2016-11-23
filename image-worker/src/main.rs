#![feature(proc_macro)]

#[macro_use]
extern crate serde_derive;

extern crate serde;
extern crate serde_json;
extern crate rustc_serialize;

extern crate image;

mod action;

//use std::io;
//use std::io::BufRead;
use action::Action;

fn main() {
    println!("{}", serde_json::to_string(&Action::New { width: 150, height: 250 }).unwrap());
    println!("{}", serde_json::to_string(&Action::Undo).unwrap());
    println!("{}", serde_json::to_string(&Action::Redo).unwrap());
    println!("{}", serde_json::to_string(&Action::Crop { x: 10, y: 11, width: 100, height: 150 }).unwrap());
    println!("{}", serde_json::to_string(&Action::FlipHorizontal).unwrap());
    println!("{}", serde_json::to_string(&Action::FlipVertical).unwrap());
    println!("{}", serde_json::to_string(&Action::Resize { width: 150, height: 250 }).unwrap());
    //let stdin = io::stdin();
    //for line in stdin.lock().lines() {
    //    let line = line.unwrap();
    //    println!("{}", line);
    //}
}
