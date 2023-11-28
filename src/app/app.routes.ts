import { Routes } from '@angular/router';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: 'blog-posts', title: 'Blog', component: BlogPostComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
];
