import React from 'react';
import Contact from './Contact';

const list= [
{
	name:'Richard Vargas',
	avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
	online: true
},
{
	name:'Florence Hanson',
	avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
	online: false
},
{
	name:'Sally Thompson',
	avatar: 'https://randomuser.me/api/portraits/women/57.jpg',
	online: true
},
{
	name:'Clarence Duncan',
	avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
	online: false
},
{
	name:'Penny Price',
	avatar: 'https://randomuser.me/api/portraits/women/84.jpg',
	online: true
}]

function ContactList(){
	return(
		list.map(user => (
			<Contact
			name = {user.name}
			avatar = {user.avatar}
			online = {user.online}
			/>)
			))
};

export default ContactList