
"use client";

import { useState } from "react";

export default function AddListingPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [details, setDetails] = useState<Record<string, string>>({});

  const fields = ["Condition", "Color", "Shape", "Location", "Address"];
  const categories = ["Furniture", "Electronics", "Home & Kitchen", "Books", "Clothing", "Free Items"];

  const inputStyle = {
    padding: 12, background: "#ddd", border: "none",
    borderRadius: 10, width: "100%", boxSizing: "border-box" as const,
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex" }}>

      
{/* LEFT: FORM */}
<section style={{ width: "30%", padding: 16, boxSizing: "border-box" }}>
  <button
    type="button"
    onClick={() => window.history.back()}
    style={{
      background: "#ddd",
      border: "none",
      borderRadius: "50%",
      width: 40,
      height: 40,
      fontSize: 24,
      cursor: "pointer",
    }}
  >
    ×
  </button>

  <h2>Upload</h2>
        <p>Upload a photo of your item</p>

        <input type="file" accept="image/*" onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setPhoto(URL.createObjectURL(file));
        }} />

        {photo && <img src={photo} alt="Upload" style={{ width: "100%" }} />}

        <div style={{ display: "grid", gap: 10, marginTop: 15 }}>
          <input placeholder="Item Name" value={name}
            onChange={(e) => setName(e.target.value)} style={inputStyle} />

          <input placeholder="Price" value={price}
            onChange={(e) => setPrice(e.target.value)} style={inputStyle} />

          <select value={details.Category || ""}
            onChange={(e) => setDetails({ ...details, Category: e.target.value })}
            style={inputStyle}>
            <option value="">Select Category</option>
            {categories.map((category) => <option key={category}>{category}</option>)}
          </select>

          {fields.map((field) => (
            <input key={field} placeholder={field} value={details[field] || ""}
              onChange={(e) => setDetails({ ...details, [field]: e.target.value })}
              style={inputStyle} />
          ))}

          <textarea placeholder="Description" value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ ...inputStyle, height: 120 }} />

          <div style={{ display: "flex", gap: 10 }}>
            <button type="button" style={{ background: "#99002b", color: "white", padding: 12, border: "none", borderRadius: 10 }}>
              Publish
            </button>
            <button type="button" style={{ background: "#ddd", padding: 12, border: "none", borderRadius: 10 }}>
              Save Draft
            </button>
          </div>
        </div>
      </section>

      {/* RIGHT: LIVE PREVIEW */}
      <section style={{ width: "70%", background: "#c9a7ae", padding: 40, display: "flex", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ display: "flex", background: "white", width: "100%", minHeight: 550 }}>

          <div style={{ width: "55%", background: "#ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {photo ? <img src={photo} alt="Preview" style={{ width: "100%" }} /> : <h2>Picture</h2>}
          </div>

          <div style={{ width: "45%", padding: 20, boxSizing: "border-box" }}>
            <h2>{name || "Item Name"}</h2>
            <p>{price ? `$${price}` : "$ Price"}</p>

            <h2>Details</h2>
            <p>{description || "Description will appear here"}</p>
            <p>Category: {details.Category || "—"}</p>

            {fields.slice(0, 3).map((field) => (
              <p key={field}>{field}: {details[field] || "—"}</p>
            ))}

            <h2>Location</h2>
            <div style={{ background: "#ddd", padding: 25, textAlign: "center" }}>Map</div>
            <p>{details.Location || "Dorm Location"}</p>
            <p>{details.Address}</p>

            <h2>Seller Information</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 45, height: 45, borderRadius: "50%", background: "#ddd" }} />
              <p>Seller Name</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
