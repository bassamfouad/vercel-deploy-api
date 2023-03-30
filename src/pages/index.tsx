import { useState, ChangeEvent, FormEvent } from "react";

interface FormValues {
  repositoryUrl: string;
  projectName: string;
  repositoryName: string;
  demoTitle: string;
  demoDescription: string;
  demoUrl: string;
  demoImage: string;
}

const CloneForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    repositoryUrl: "",
    projectName: "",
    repositoryName: "",
    demoTitle: "",
    demoDescription: "",
    demoUrl: "",
    demoImage: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      repositoryUrl,
      projectName,
      repositoryName,
      demoTitle,
      demoDescription,
      demoUrl,
      demoImage,
    } = formValues;
    const urlSearchParams = new URLSearchParams({
      "repository-url": repositoryUrl,
      "project-name": projectName,
      "repository-name": repositoryName,
      "demo-title": demoTitle,
      "demo-description": demoDescription,
      "demo-url": demoUrl,
      "demo-image": demoImage,
    });
    window.open(
      `https://vercel.com/new/clone?${urlSearchParams.toString()}`,
      "_blank"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-6 px-4 lg:px-0"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="repositoryUrl"
        >
          Repository URL
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="repositoryUrl"
          placeholder="Repository URL"
          value={formValues.repositoryUrl}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="projectName"
        >
          Project name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="projectName"
          placeholder="Project name"
          value={formValues.projectName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="repositoryName"
        >
          Repository name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="repositoryName"
          placeholder="Repository name"
          value={formValues.repositoryName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="demoTitle"
        >
          Demo title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="demoTitle"
          placeholder="Demo title"
          value={formValues.demoTitle}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="demoDescription"
        >
          Demo description
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="demoDescription"
          placeholder="Demo description"
          value={formValues.demoDescription}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="demoUrl">
          Demo URL
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="demoUrl"
          placeholder="Demo URL"
          value={formValues.demoUrl}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Deploy
        </button>
      </div>
    </form>
  );
};

export default CloneForm;
