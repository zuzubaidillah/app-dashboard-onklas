import axios from "axios";
export class ApiServer{
	static serverUrl = `http://localhost:6091`;

	// profesi
	static getAllProfesi(){
		let dataUrl = `${this.serverUrl}/profesis`;
		return axios.get(dataUrl);
	}

	// feedposts
	static getAllFeedPosts(){
		let dataUrl = `${this.serverUrl}/feed-posts`;
		return axios.get(dataUrl);
	}


	// contacts

	static getAllContacts(){
		let dataUrl = `${this.serverUrl}/contacts`;
		return axios.get(dataUrl);
	}

	static getContact(contactId){
		let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
		return axios.get(dataUrl);
	}

	static createContact(contact){
		let dataUrl = `${this.serverUrl}/contacts/`;
		return axios.post(dataUrl, contact);
	}

	static updateContact(contact, contactId){
		let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
		return axios.put(dataUrl, contact);
	}

	static deleteContact(contactId){
		let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
		return axios.delete(dataUrl);
	}

	static getAllGroups(){
		let dataUrl = `${this.serverUrl}/groups`;
		return axios.get(dataUrl);
	}

	static getGroup(contact){
		let groupId = contact.groupId;
		let dataUrl = `${this.serverUrl}/groups/${groupId}`;
		return axios.get(dataUrl);
	}
}
