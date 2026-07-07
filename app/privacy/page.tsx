import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ItReveal",
  description:
    "Privacy policy for the ItReveal mobile app and related services operated by ItReveal Labs.",
};

const thirdPartyServices = [
  {
    name: "Google Play Services",
    href: "https://www.google.com/policies/privacy/",
  },
  {
    name: "Google Analytics for Firebase",
    href: "https://firebase.google.com/support/privacy",
  },
  {
    name: "Firebase Crashlytics",
    href: "https://firebase.google.com/support/privacy/",
  },
  {
    name: "Expo",
    href: "https://expo.io/privacy",
  },
  {
    name: "RevenueCat",
    href: "https://www.revenuecat.com/privacy",
  },
];

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-800"
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-stone-950">{title}</h2>
      {children}
    </section>
  );
}

function PolicyList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-stone-400">
      {children}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-10 sm:px-8">
      <Link
        href="/"
        className="text-sm font-medium text-stone-600 transition hover:text-stone-900"
      >
        Back to home
      </Link>

      <article className="mt-8 space-y-9 bg-white/80 p-6 shadow-[0_12px_40px_rgba(40,33,20,0.06)] ring-1 ring-stone-200 sm:p-8">
        <header className="space-y-4">
          <p className="text-sm font-medium tracking-[0.16em] text-stone-500 uppercase">
            Privacy Policy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-950">
            Privacy Policy
          </h1>
          <p className="text-sm leading-7 text-stone-700">
            This privacy policy is applicable to the ItReveal app for mobile
            devices, together with any related services operated by ItReveal Labs
            (collectively, the &quot;Application&quot;). ItReveal Labs is
            hereinafter referred to as the &quot;Service Provider&quot;.
          </p>
        </header>

        <div className="space-y-9 text-sm leading-7 text-stone-700">
          <PolicySection title="Data Controller Information">
            <p>
              ItReveal Labs acts as the Data Controller responsible for the
              processing of your personal data.
            </p>
            <PolicyList>
              <li>Entity: ItReveal Labs</li>
              <li>Email: itreveal.app@gmail.com</li>
            </PolicyList>
            <p>
              For data protection inquiries and to exercise your GDPR rights,
              please contact the Data Controller using the contact information
              above.
            </p>
          </PolicySection>

          <PolicySection title="What information does the Application obtain and how is it used?">
            <p>
              The Application and related services acquire the information you
              supply when you download, access, or register for the service.
              Registration with the Service Provider is not mandatory. However,
              you might not be able to use some of the features offered by the
              service unless you register.
            </p>
            <p>
              The Service Provider may also use the information you provide to
              send important information, required notices, and, where permitted
              by law, marketing communications.
            </p>
          </PolicySection>

          <PolicySection title="Legal basis for processing your personal data">
            <p>
              Where the GDPR applies, the Service Provider relies on one or more
              lawful bases to process your personal data, including:
            </p>
            <PolicyList>
              <li>
                Contract performance: processing necessary to provide the
                Application or fulfil a contract with you.
              </li>
              <li>
                Consent: where you have given explicit consent to processing,
                including for marketing, analytics, or optional features. You
                may withdraw consent at any time without affecting processing
                that occurred before withdrawal.
              </li>
              <li>
                Legitimate interests: where processing is necessary for the
                Service Provider&apos;s specific legitimate interests, such as
                maintaining network and information security, preventing fraud
                and abuse, or improving the Application&apos;s core
                functionality through analytics, provided those interests are not
                overridden by your data protection rights or fundamental
                freedoms.
              </li>
              <li>
                Legal obligation: to comply with laws or government requests.
              </li>
            </PolicyList>
          </PolicySection>

          <PolicySection title="Cookies and similar technologies">
            <p>
              The Application or its third-party SDKs may use cookies, SDKs,
              pixels, and similar technologies to support functionality,
              analytics, and service delivery. Where required by law, the Service
              Provider will obtain your consent before using non-essential
              tracking technologies.
            </p>
          </PolicySection>

          <PolicySection title="Automated decision-making and profiling">
            <p>
              If the Application uses automated decision-making, including
              profiling, that produces legal effects concerning you or similarly
              significantly affects you, you have the right to request human
              review, express your point of view, and contest the decision.
              Information about the logic involved and the likely consequences
              of that processing will be provided where required by law.
            </p>
          </PolicySection>

          <PolicySection title="What information does the Application collect automatically?">
            <p>
              In addition, the Application may collect certain information
              automatically, including, but not limited to, the type of mobile
              device you use, your mobile device&apos;s unique device ID, the IP
              address of your mobile device, your mobile operating system, the
              type of mobile Internet browsers you use, and information about
              the way you use the Application.
            </p>
          </PolicySection>

          <PolicySection title="Does the Application collect precise real time location information of the device?">
            <p>
              This Application does not gather precise information about the
              location of your mobile device.
            </p>
          </PolicySection>

          <PolicySection title="Does the Application use Artificial Intelligence (AI) technologies?">
            <p>
              The Application uses Artificial Intelligence (AI) technologies to
              enhance user experience and provide certain features. The AI
              components may process user data in the following ways:
            </p>
            <PolicyList>
              <li>
                Personalized Content: AI may analyze your usage patterns to
                deliver content tailored to your preferences and behavior.
              </li>
              <li>
                Recommendations: AI may suggest features, services, or content
                based on your interactions within the Application.
              </li>
              <li>
                Automated Functionalities: Certain app features may be powered
                by AI to automate tasks or improve efficiency.
              </li>
              <li>
                Data Protection: All AI processing is performed in accordance
                with this privacy policy and applicable laws, ensuring your data
                is handled securely and responsibly.
              </li>
            </PolicyList>
          </PolicySection>

          <PolicySection title="Do third parties see and/or have access to information obtained by the Application?">
            <p>
              Only aggregated, anonymized data is periodically transmitted to
              external services to aid the Service Provider in improving the
              Application and their service. The Service Provider may share your
              information with third parties in the ways that are described in
              this privacy statement.
            </p>
          </PolicySection>

          <PolicySection title="International Data Transfers">
            <p>
              The Service Provider or its third-party service providers may
              transfer personal data outside the European Economic Area (EEA).
              Where such transfers occur, the Service Provider will use an
              appropriate transfer mechanism required by GDPR Chapter V.
            </p>
            <PolicyList>
              <li>Adequacy decisions by the European Commission</li>
              <li>
                Standard Contractual Clauses (SCCs) approved by the European
                Commission
              </li>
              <li>
                Other safeguards or derogations recognized under GDPR Chapter V,
                including consent where legally permitted
              </li>
            </PolicyList>
            <p>
              Countries outside the EEA may not provide the same level of data
              protection as the EEA. Where required by law, the Service Provider
              will apply appropriate safeguards and obtain any consent required
              for the transfer.
            </p>
            <p>
              Please note that the Application utilizes third-party services
              that have their own Privacy Policy about handling data. Below are
              the links to the Privacy Policy of the third-party service
              providers used by the Application:
            </p>
            <PolicyList>
              {thirdPartyServices.map((service) => (
                <li key={service.href}>
                  <ExternalLink href={service.href}>{service.name}</ExternalLink>
                </li>
              ))}
            </PolicyList>
            <p>
              The Service Provider may disclose User Provided and Automatically
              Collected Information:
            </p>
            <PolicyList>
              <li>
                as required by law, such as to comply with a subpoena, or
                similar legal process;
              </li>
              <li>
                when they believe in good faith that disclosure is necessary to
                protect their rights, protect your safety or the safety of
                others, investigate fraud, or respond to a government request;
              </li>
              <li>
                with their trusted services providers who work on their behalf,
                do not have an independent use of the information the Service
                Provider discloses to them, and have agreed to adhere to the
                rules set forth in this privacy statement.
              </li>
            </PolicyList>
            <p>
              Where the GDPR applies, the Service Provider enters into Data
              Processing Agreements (DPAs) with third-party service providers
              that process personal data on its behalf, as required by Article
              28 of the GDPR. These DPAs impose the same data protection
              obligations on those service providers as described in this Privacy
              Policy.
            </p>
          </PolicySection>

          <PolicySection title="What are my opt-out rights?">
            <p>
              You can stop further collection of information from your mobile
              device by uninstalling the Application. Uninstalling will stop the
              Application from collecting data from your device, but it does not
              automatically delete information that has already been transmitted
              to the Service Provider or to third parties.
            </p>
            <p>
              To request deletion of your personal data, withdraw consent, or
              exercise any of your rights, contact the Service Provider at
              itreveal.app@gmail.com.
            </p>
          </PolicySection>

          <PolicySection title="What is the data retention policy and how can you manage your information?">
            <p>
              The Service Provider retains personal data based on its necessity
              for the stated purposes:
            </p>
            <PolicyList>
              <li>
                User Provided Data: Retained for the duration of your use of the
                Application plus 12 months thereafter, unless longer retention is
                required by law
              </li>
              <li>
                Automatically Collected Data: Retained for up to 24 months from
                collection, unless longer retention is required for legal
                compliance or security purposes
              </li>
              <li>
                Aggregated and Anonymized Data: Retained indefinitely as it no
                longer identifies you
              </li>
              <li>
                Data required for legal compliance: Retained as long as required
                by applicable law
              </li>
            </PolicyList>
            <p>
              You have the right to request deletion of your personal data at
              any time, except where retention is required by law. If you&apos;d
              like the Service Provider to delete User Provided Data that you
              have provided via the Application, please contact them at
              itreveal.app@gmail.com and they will respond within the time
              required by applicable law. Please note that some User Provided
              Data may be required in order for the Application to function
              properly.
            </p>
          </PolicySection>

          <PolicySection title="How does the Application address children's privacy?">
            <p>
              The Application is not intended for children under 13 years of age,
              or where a higher age of digital consent is established under
              applicable law. The Service Provider does not knowingly solicit
              data from children or market the Application to them.
            </p>
            <p>
              Where parental or guardian consent is required under applicable
              law, the Application is not intended for use without that consent.
              The Service Provider does not knowingly collect personally
              identifiable information from children under 13 years of age, or
              where a higher age of digital consent is established by applicable
              law, in violation of applicable law. In the event the Service
              Provider discovers that a child has provided personal information,
              the Service Provider will immediately delete this from their
              servers. If you are a parent or guardian and you are aware that
              your child has provided the Service Provider with personal
              information, please contact the Service Provider
              (itreveal.app@gmail.com) so that they will be able to take the
              necessary actions.
            </p>
          </PolicySection>

          <PolicySection title="How is your information kept secure?">
            <p>
              The Service Provider is committed to safeguarding the
              confidentiality of your information. The Service Provider
              implements physical, electronic, and procedural safeguards to
              protect information it processes and maintains. For example,
              access is limited to authorized employees and contractors who need
              to know that information to operate, develop, or improve the
              Application. However, no security system can prevent all potential
              security breaches.
            </p>
          </PolicySection>

          <PolicySection title="Data Breach Notification">
            <p>
              In the event of a personal data breach that poses a risk to your
              rights and freedoms, the Service Provider will notify the relevant
              supervisory authority within 72 hours of becoming aware of the
              breach, as required by applicable law. Where the breach is likely
              to result in a high risk to your rights and freedoms, the Service
              Provider will also notify you without undue delay, providing
              information about the nature of the breach, the categories of data
              affected, and the measures taken or proposed to address the
              breach.
            </p>
          </PolicySection>

          <PolicySection title="How will you be informed of changes to this Privacy Policy?">
            <p>
              The Service Provider may update this Privacy Policy from time to
              time. The Service Provider will notify you of material changes by
              posting the updated Privacy Policy with an effective date. Where
              required by law, the Service Provider will seek your consent to
              material changes before they take effect.
            </p>
            <p>
              Previous versions of this Privacy Policy will be maintained and
              made available upon request by contacting the Service Provider at
              itreveal.app@gmail.com.
            </p>
            <p>This privacy policy is effective as of 2026-06-25</p>
          </PolicySection>

          <PolicySection title="What are your GDPR data protection rights?">
            <p>Under the GDPR, you have the following rights:</p>
            <PolicyList>
              <li>Right of Access: You can request access to your personal data.</li>
              <li>
                Right to Rectification: You can request correction of inaccurate
                data.
              </li>
              <li>
                Right to Erasure: You can request deletion of your personal data
                (the &quot;right to be forgotten&quot;).
              </li>
              <li>
                Right to Restrict Processing: You can request that the Data
                Controller limits how they use your data.
              </li>
              <li>
                Right to Data Portability: You can request a copy of your data
                in a structured, commonly used, machine-readable format.
              </li>
              <li>
                Right to Object: You can object to processing based on
                legitimate interests. You have an absolute right to object to
                processing for direct marketing purposes at any time.
              </li>
              <li>
                Right to Withdraw Consent: Where processing is based on your
                consent, you can withdraw it at any time. Withdrawal is as simple
                as toggling preferences in the Application&apos;s settings or
                contacting the Data Controller.
              </li>
              <li>
                Rights Regarding Automated Decision-Making: You have rights
                related to automated decisions that affect you.
              </li>
            </PolicyList>
            <p>
              If you believe your data protection rights have been violated, you
              have the right to lodge a complaint with your local Data Protection
              Authority. Contact details for each country&apos;s Data Protection
              Authority can be found at:{" "}
              <ExternalLink href="https://edpb.ec.europa.eu/about-edpb/members_en">
                https://edpb.ec.europa.eu/about-edpb/members_en
              </ExternalLink>
            </p>
            <p>
              If you are located in the United Kingdom, you may contact the
              Information Commissioner&apos;s Office at{" "}
              <ExternalLink href="https://ico.org.uk">
                https://ico.org.uk
              </ExternalLink>
            </p>
          </PolicySection>

          <PolicySection title="What are your California privacy rights (CCPA/CPRA)?">
            <p>
              If you are a resident of California, the California Consumer
              Privacy Act (CCPA) and the California Privacy Rights Act (CPRA)
              provide you with additional rights regarding your personal
              information:
            </p>
            <PolicyList>
              <li>
                Right to Know: You can request disclosure of the categories and
                specific pieces of personal information the Service Provider has
                collected about you.
              </li>
              <li>
                Right to Delete: You can request deletion of personal
                information the Service Provider has collected from you, subject
                to certain exceptions.
              </li>
              <li>
                Right to Correct: You can request correction of inaccurate
                personal information.
              </li>
              <li>
                Right to Opt-Out: You can opt out of the sale or sharing of your
                personal information for cross-context behavioral advertising.
              </li>
              <li>
                Right to Limit Use of Sensitive Personal Information: You can
                limit the use of your sensitive personal information to
                essential purposes.
              </li>
              <li>
                Right to Non-Discrimination: The Service Provider will not
                discriminate against you for exercising any of your CCPA/CPRA
                rights.
              </li>
            </PolicyList>
            <p>
              To exercise any of these rights, please contact the Service
              Provider at itreveal.app@gmail.com. The Service Provider will
              verify your request using the information you provide and respond
              within the timeframes required by law. You may designate an
              authorized agent to make a request on your behalf.
            </p>
          </PolicySection>

          <PolicySection title="How do you give your consent?">
            <p>
              Where processing is based on consent, you provide that consent by
              affirmatively opting in to the relevant feature or action. You may
              withdraw consent at any time without affecting processing carried
              out before withdrawal. Processing based on other lawful bases,
              including contract performance, legitimate interests, or legal
              obligations, is carried out as described above.
            </p>
          </PolicySection>

          <PolicySection title="How can you contact the Data Controller?">
            <p>
              If you have any questions regarding privacy while using the
              Application, or have questions about the practices, please contact
              the Service Provider via email at itreveal.app@gmail.com.
            </p>
            <p>
              To request deletion of your personal data or to exercise any of
              your rights, contact the Service Provider using the details
              provided above. The Service Provider will respond within one month
              of receiving your request, extendable by up to two months where
              necessary due to the complexity or volume of requests, as permitted
              by applicable law.
            </p>
          </PolicySection>
        </div>
      </article>
    </main>
  );
}
