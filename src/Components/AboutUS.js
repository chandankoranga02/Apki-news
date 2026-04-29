import React, { Component } from 'react'

export default class AboutUS extends Component {
    render() {
        return (
            <div
                className="container-fluid py-5"
                style={
                    this.props.mode === "light"
                        ? {
                            background: "linear-gradient(135deg, #eef2ff, #ffffff)",
                            color: "#000",
                        }
                        : {
                            background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
                            color: "#fff",
                        }
                }
            >
                {/* HERO SECTION */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold display-4 mb-3">
                        <span style={{ color: "#0d6efd" }}>ApkiNews</span> — Stay Ahead of the Headlines
                    </h1>

                    <p
                        className="lead"
                        style={{
                            maxWidth: "700px",
                            margin: "0 auto",
                            opacity: 0.85,
                            fontSize: "1.1rem",
                        }}
                    >
                        A modern news platform designed to deliver clean, fast, distraction-free
                        content powered by React and live APIs.
                    </p>
                </div>

                {/* STATS SECTION */}
                <div className="container mb-5">
                    <div className="row g-4 text-center">

                        {[
                            { num: "10+", label: "News Categories" },
                            { num: "Live", label: "API Updates" },
                            { num: "0 Ads", label: "Pure Reading" },
                        ].map((item, i) => (
                            <div key={i} className="col-md-4">
                                <div
                                    className="p-4 rounded shadow-lg"
                                    style={
                                        this.props.mode === "light"
                                            ? {
                                                background: "rgba(255,255,255,0.85)",
                                                backdropFilter: "blur(6px)",
                                            }
                                            : {
                                                background: "rgba(255,255,255,0.05)",
                                                backdropFilter: "blur(8px)",
                                                border: "1px solid #333",
                                            }
                                    }
                                >
                                    <h2 className="fw-bold mb-1">{item.num}</h2>
                                    <p className="mb-0" style={{ opacity: 0.8 }}>
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* MAIN CONTENT CARD */}
                <div
                    className="container p-5 rounded shadow-lg mb-5"
                    style={
                        this.props.mode === "light"
                            ? { backgroundColor: "#ffffff" }
                            : { backgroundColor: "#1e1e1e", border: "1px solid #333" }
                    }
                >
                    <h2 className="fw-bold mb-4">What is ApkiNews?</h2>
                    <p className="fs-5">
                        <strong>ApkiNews</strong> is a premium news platform built with a focus
                        on clarity, minimalism and performance. No ads, no clutter — only fast,
                        clean and relevant content powered by live APIs and a polished UI.
                    </p>

                    <hr className="my-4" />

                    {/* ADVANCED FEATURE GRID */}
                    <h3 className="fw-bold mb-4">🚀 Core Highlights</h3>

                    <div className="row g-4">

                        {[
                            {
                                title: "Live Headlines",
                                desc: "Latest stories fetched instantly via News API.",
                            },
                            {
                                title: "Smart Categories",
                                desc: "Switch instantly between Business, Sports, Tech and more.",
                            },
                            {
                                title: "Performance First",
                                desc: "React-based routing for instant navigation.",
                            },
                            {
                                title: "Clean Reading UI",
                                desc: "Modern card layout keeps focus only on content.",
                            },
                            {
                                title: "Dark / Light Mode",
                                desc: "System-like theming that adapts instantly.",
                            },
                            {
                                title: "Mobile Responsive",
                                desc: "Designed to look great on every screen size.",
                            },
                        ].map((f, i) => (
                            <div key={i} className="col-md-4">
                                <div
                                    className="p-4 rounded h-100 shadow-sm"
                                    style={
                                        this.props.mode === "light"
                                            ? { backgroundColor: "#f8f9fa" }
                                            : { backgroundColor: "#2c2c2c" }
                                    }
                                >
                                    <h5 className="fw-bold mb-2">{f.title}</h5>
                                    <p className="mb-0" style={{ opacity: 0.85 }}>
                                        {f.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                    <hr className="my-5" />

                    {/* DEV CARD */}
                    <h3 className="fw-bold mb-3">👨‍💻 Developer Info</h3>

                    <div
                        className="p-4 rounded"
                        style={
                            this.props.mode === "light"
                                ? { backgroundColor: "#f1f1f1" }
                                : { backgroundColor: "#262626" }
                        }
                    >
                        <p className="mb-1 fs-5"><strong>Developer:</strong> Chandan</p>
                        <p className="mb-1 fs-6">
                            <strong>Tech Stack:</strong> React, JavaScript (ES6+), Bootstrap, News API
                        </p>
                        <p className="text-muted mb-0 fs-6">
                            Building fast, real-world web applications with modern frontend practices.
                        </p>
                    </div>
                </div>
            </div>



        )
    }
}
