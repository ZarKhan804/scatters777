import React from "react";

const Article = () => {
  return (
    <section className="bg-gray-200 py-4 sm:py-6">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Scatter Game Contact &amp; Support
          </h2>

          <p className="mt-4 text-base leading-8 text-gray-600 sm:text-[17px]">
            If you need <strong>Scatter Game Contact</strong> information,
            this page provides guidance for visitors looking for{" "}
            <strong>Scatter Game Contact Us</strong>,{" "}
            <strong>Scatter Game Support</strong>, and general website
            assistance. Visitors can use the contact form to ask questions
            about website information, account access, gameplay guides, and
            platform-related topics. If you need help understanding the
            website or finding relevant resources, describe your question
            clearly when submitting a message. For{" "}
            <strong>Scatter Game Technical Support</strong>,{" "}
            <strong>Scatter Game Account Help</strong>,{" "}
            <strong>Scatter Game Login Help</strong>, or registration-related
            questions, provide only the information necessary to explain
            your issue. Never share your password, verification codes, or
            sensitive account details through a contact form. Visitors can
            also explore information about mobile access, platform
            information, account security, and responsible gaming throughout
            this website.
          </p>

          {/* 14 CONTACT ARTICLE TOPICS */}
          <div className="mt-8 border-t border-gray-300 pt-6">
            <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
              Scatter Game Contact &amp; Support Articles
            </h3>

            <div className="mt-5 grid gap-x-10 gap-y-2 text-base leading-7 text-gray-600 sm:grid-cols-2">
              {/* LEFT SIDE */}
              <div className="space-y-2">
                <p>• Scatter Game Contact and Support Guide</p>
                <p>• Scatter Game Customer Support Information</p>
                <p>• Scatter Game Account Help Guide</p>
                <p>• Scatter Game Login Help and Common Issues</p>
                <p>• Scatter Game Registration Information</p>
                <p>• Scatter Game Access Guide</p>
                <p>• Scatter Game Mobile Access Information</p>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-2">
                <p>• Scatter Game Payment Information and Safety</p>
                <p>• Scatter Game Deposit Information Guide</p>
                <p>• Scatter Game Withdrawal Information Guide</p>
                <p>• Scatter Game Technical Help Guide</p>
                <p>• Scatter Game Frequently Asked Questions</p>
                <p>• Scatter Game Platform Features and Information</p>
                <p>• Scatter Game User Support Guide</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Article;