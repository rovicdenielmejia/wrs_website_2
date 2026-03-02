# Contact Form – Automatic Email to wrs.recruitment.hr@gmail.com

The contact form on **contact.html** sends submissions **automatically** to **wrs.recruitment.hr@gmail.com** using [Formspree](https://formspree.io). The user does not need to open their email client.

---

## One-time setup (about 2 minutes)

1. **Sign up at Formspree**  
   Go to [https://formspree.io](https://formspree.io) and create a free account.

2. **Create a new form**  
   Click **New Form**. Set the notification email to:
   ```text
   wrs.recruitment.hr@gmail.com
   ```
   Save the form.

3. **Get your Form ID**  
   Formspree will show a URL like:
   ```text
   https://formspree.io/f/xyzabcde
   ```
   The part after `/f/` is your **Form ID** (e.g. `xyzabcde`).

4. **Put the Form ID in your site**  
   Open **contact.html** and find:
   ```html
   data-formspree-id="YOUR_FORMSPREE_FORM_ID"
   ```
   Replace `YOUR_FORMSPREE_FORM_ID` with your actual Form ID (e.g. `xyzabcde`).

5. **Save and deploy**  
   Save contact.html. New submissions will be sent to **wrs.recruitment.hr@gmail.com**; Formspree may send a confirmation email to that address the first time.

---

## What happens when someone submits

1. User fills out the form and clicks **Send Message**.
2. The page sends the data to Formspree (no redirect to another site).
3. Formspree emails the submission to **wrs.recruitment.hr@gmail.com**.
4. The user is redirected to **thank-you.html?type=contact**.

No email client is opened for the user; delivery is handled by Formspree.

---

## If you don’t set a Form ID

If `data-formspree-id` is still `YOUR_FORMSPREE_FORM_ID`, the form will show a message asking you to set your Formspree form ID. Submissions will not be sent until the ID is updated.

---

## Optional: reply-to the sender

Formspree uses the **email** field from the form as the reply-to address, so you can reply from your inbox to the person who submitted.
