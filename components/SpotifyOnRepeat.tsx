export default function SpotifyOnRepeat() {
  return (
    <div className="spotify-embed">
      <iframe
        data-testid="embed-iframe"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1EpwdO7cM2x8ub?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder={0}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify On Repeat"
      />
    </div>
  );
}
