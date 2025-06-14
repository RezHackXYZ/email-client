<!-- filepath: /home/rez/Documents/repos/email-client/src/routes/+page.svelte -->
<script>
	let from = "yo";
	let to = "9a8a11@hack.af";
	let subject = "Test Email";
	let html = "Hi! This is a test email sent via Resend + Node.js";

	function sendEmail() {
		fetch("/api/send-email", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				from: from + "@rezhack.xyz",
				to: to,
				subject: subject,
				html: html,
			}),
		})
			.then(async (res) => {
				const text = await res.text(); // Log raw response
				console.log("Raw response:", text);
				try {
					const data = JSON.parse(text);
					if (data.success) {
						console.log("✅ Email sent successfully!");
					} else {
						console.error("❌ Failed to send email:", data.error);
					}
				} catch (err) {
					console.error("❌ Failed to parse response:", err);
				}
			})
			.catch((err) => console.error("❌ Failed to send email:", err));
	}
</script>

<div><input class="input" type="text" bind:value={from} />@rezhack.xyz</div>
<div><input class="input" type="text" bind:value={to} /></div>
<div><input class="input" type="text" bind:value={subject} /></div>
<div><textarea class="input" bind:value={html}></textarea></div>
<div>
	<button
		class="input"
		onclick={() => {
			sendEmail();
			console.log("hi");
		}}>Send Email</button
	>
</div>
