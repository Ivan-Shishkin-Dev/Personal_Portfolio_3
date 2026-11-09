const ACCESS_KEY = "588824fa-09ac-46ae-ae60-a14808218451";
const SUBJECT = "Anonymous feedback — ivanshishkin.com";

export async function sendFeedback(message: string): Promise<{ ok: boolean; error?: string }> {
  const formData = new FormData();
  formData.append("access_key", ACCESS_KEY);
  formData.append("subject", SUBJECT);
  formData.append("from_name", "Anonymous (ivanshishkin.com)");
  formData.append("message", message);

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.success
      ? { ok: true }
      : { ok: false, error: data.message || "Something went wrong. Try again." };
  } catch {
    return { ok: false, error: "Network error. Try again." };
  }
}
