export const ADD_DISC = 'ADD_DISC';
export const RESTART_GAME = 'RESTART_GAME';
export const MOUSE_ENTER = 'MOUSE_ENTER';
export const MOUSE_LEAVE = 'MOUSE_LEAVE';

/*
 * action creators
 */

export function addDisc(column, color) {
  return { 
	'type': ADD_DISC, 
	column, 
	color
}}

export function mouseEnter(column, color) {
  return { 
	'type': MOUSE_ENTER, 
	column, 
	color
}}

export function mouseLeave(column) {
  return { 
	'type': MOUSE_LEAVE, 
	column
}}

export function restartGame() {
  return { 
	'type': RESTART_GAME
}}