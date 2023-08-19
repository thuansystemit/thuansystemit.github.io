import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {id: 1, value: 'Posts Management', tooltip: "The \"Posts Management\" project is designed to facilitate the organization and control of user-generated content on a platform. In this project, users are categorized into different roles, each of which grants them certain permissions and access levels."},
    {id: 2, value: 'Document Management system', tooltip: "\"Document Management System\" is a correct and concise phrase that describes a software solution or platform designed to organize, store, retrieve, and manage digital documents and files. This system typically provides features such as version control, access control, document tracking, collaboration tools, and search capabilities to facilitate efficient document handling within an organization. The phrase accurately communicates the focus and purpose of the system."},
    {id: 3, value: 'Design a TinyURL services', tooltip: "Designing a TinyURL service involves creating a system that shortens long URLs into shorter, more manageable links. Users can then use these short links to access the original content. Here's a high-level design for a basic TinyURL service"},
    {id: 4, value: 'Bookstore Management', tooltip: "a Bookstore Management system involves creating a software solution that facilitates the efficient management of a bookstore's inventory, sales, customer interactions, and other related operations"},
    {id: 5, value: 'A chat system', tooltip: "A chat system involves creating a platform that allows real-time communication between users through text messages"},
    {id: 6, value: 'Order and Payment system', tooltip: "Order and Payment System involves creating a software solution that allows customers to place orders for products or services and make payments securely"}
  ];
  projectInfo = 'I have already implemented many projects as listed below. You can click on an item in the list to see more details, or you can hover over it to access a lot of information about that project.';
}
