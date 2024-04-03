import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'contact-us',
  templateUrl: 'contact-us.component.html',
  styleUrls: ['contact-us.component.css'],
})
export class ContactUs {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Contact-Us - Weldpool')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Contact-Us - Weldpool',
      },
    ])
  }

  sendEmail(name, email, tel, msg) {
    const emailBody = 'Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + tel + '\n\nMessage:\n' + msg;
    const link = 'mailto:weldpoolglobal@gmail.com?subject=Message%20from%20Weldpool%20Website&body=' + encodeURIComponent(emailBody);
    window.open(link);
  }
}
