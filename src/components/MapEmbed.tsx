export default function MapEmbed() {
  const mapsUrl = "https://maps.app.goo.gl/SPhJb2EWXrMW793T6"; // Replace with your business link

  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-[300px] h-[200px] lg:w-[600px] lg:h-[400px] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d2976.610699234639!2d44.7631951!3d41.7504892!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x404473b5080e20c9%3A0x30fff9b95c788b7c!2zTXVraHJhbiBNYWNoYXZhcmlhbmkgNjMvMywgVGJpbGlzaSDhg5Xhg5Dhg6jhg5rhg5jhg6_hg5Xhg5Dhg6Dhg5ggMyDhg5nhg53hg6Dhg57hg6Phg6Hhg5gg4YOb4YOj4YOu4YOg4YOQ4YOcIOGDm-GDkOGDreGDkOGDleGDkOGDoOGDmOGDkOGDnOGDmOGDoSA2MyBUYmlsaXNp!3m2!1d41.7504892!2d44.7631951!5e0!3m2!1sen!2sge!4v1761480538404!5m2!1sen!2sge"
        width="600"
        height="450"
        style={{ border: 0, pointerEvents: "none" }}
        allowFullScreen
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </a>
  );
}
