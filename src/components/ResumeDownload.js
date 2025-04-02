export default function ResumeDownload() {
    return (
      <div className="text-center my-8">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-gray-700"
        >
          Download Resume
        </a>
      </div>
    );
  }