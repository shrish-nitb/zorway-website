import React from "react";

export default function MemberThumb({ name, info }) {
  return (
    <>
      <div class="image-container">
        <div
          style={{ maxWidth: "281px", zIndex: 2 }}
          class="image-overlay gray-tinge"
        ></div>
        <img
          src="https://s3-alpha-sig.figma.com/img/f26a/8782/86f4e0a4d7f9378cc7da5ce24058a1b8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LzWZi5d0o0fVHO1Ou~xGM~4V7S8h~nHVdQKlbVNj1YogkSrwKtzZUzW0BlgL3LTfHJbN-SqVBwTqZ~Co6zriLgRYo-bqKEgy66RvwZTVyTFifQeqBAFNr1DFyORKxIu9-IgzGgJa0ykoSR0qFIZoVJeFSqnRaBPWqoEERbVaicFf5elHYzuImV8f-JUvzgxpUuwGoKZBdSDBpjLzx7ow2X6BDg2y4M~d8lTaTs~mrudFtm1SXpfdseqFYqdCUH8r86kzu5yTq3PbVgtO3jaBYFHBBIrXIOkoxzha1qislHTxavAyVGC0bMBKY~OTxCaeQscm7Fto0SjqT9SuQOoPMQ__"
          alt=""
          style={{
            maxWidth: "281px",
            width: "100%",
            height: "inherit",
            borderRadius: "25px",
            position: "relative",
            zIndex: 1,
          }}
        />
        <div className="member-info">
          <span className="member-name">{name}</span>
          <span className="member-description">{info}</span>
        </div>
      </div>
    </>
  );
}
