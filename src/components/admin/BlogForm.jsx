import React from "react";

export default function BlogForm({ formData, setFormData, onSubmit, editing }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
      <h1 className="text-3xl font-bold mb-6">
        {editing ? "Edit Blog" : "Add New Blog"}
      </h1>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      />
      <input
        name="img"
        value={formData.img}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      />
      <input
        name="readTime"
        value={formData.readTime}
        onChange={handleChange}
        placeholder="Read Time"
        className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      />
      <input
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Date"
        className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      />
      <input
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author"
        className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      />
      <textarea
        name="desc"
        value={formData.desc}
        onChange={handleChange}
        placeholder="Description"
        className="w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      />
      <label className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
        />
        Featured
      </label>
      <button
        onClick={onSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {editing ? "Save Changes" : "Add Blog"}
      </button>
    </div>
  );
}
