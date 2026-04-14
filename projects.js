const portfolioData = {
    film: {
        id: "film-video",
        title: "Film & Video",
        type: "video_gallery",
        items: [
            { title: "Mon épicier", videoId: "jrCoEl_4gY4", thumb: "resources/MonEpicier.jpg" },
            { title: "Thermal Shutdown", videoId: "SnsG77LGZvs", thumb: "resources/ThermalShutdown.jpg" },
            { title: "Brick by Brick", videoId: "aFLu1FLZkQE", thumb: "resources/BrickByBrick.jpg" },
            { title: "L'exposition Abandonnée", videoId: "-pJ0PG24Od4", thumb: "resources/expoThumbnail.jpg" },
            { title: "The city, the body", videoId: "G0hbverd19M", thumb: "resources/CityBody.jpg" },
            { title: "Les rues de Montréal", videoId: "-J4v9c1_ru8", thumb: "resources/RuesMTL0.jpg" },
        ]
    },
    photography: {
        id: "photography",
        title: "Photography",
        type: "project_gallery",
        // description: "Click the works below to see more complex projects.",
        showGrid: true,
        items: [
            {
                modalId: "photo-modal-1",
                title: "Image Editing & Compositing",
                mediums: "Photography, Photoshop, Lightroom",
                date: "2026",
                coverThumb: "resources/PSEditing.jpg",
                gridImage: "resources/PSEditing.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "comparison", beforeSrc: "resources/highres_scan.jpg", afterSrc: "resources/highres_scan_after.jpg", thumb: "resources/highres_scan_after.jpg" },
                    { type: "comparison", beforeSrc: "resources/triptych_before.jpg", afterSrc: "resources/triptych_after.jpg", thumb: "resources/triptych_after.jpg" },
                    { type: "image", src: "resources/SplashScreen.webp", thumb: "resources/SplashScreen.webp" },
                ]
            },
            {
                modalId: "photo-modal-2",
                title: "Photography Project 2",
                mediums: "Tech A, Tech B",
                date: "2026",
                coverThumb: "resources/submerged_20.jpg",
                gridImage: "resources/photography_project_1_1776021263989.png",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            },
            // {
            //     modalId: "photo-modal-3",
            //     title: "Photography Project 3",
            //     mediums: "Tech A, Tech B",
            //     date: "2026",
            //     coverThumb: "resources/photography_grid_1_1776021281333.png",
            //     gridImage: "resources/photography_grid_1_1776021281333.png",
            //     desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
            //     slides: [
            //         { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
            //         { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
            //         { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
            //     ]
            // }
        ]
    },
    animation: {
        id: "3d-animation",
        title: "3D & Animation",
        type: "project_gallery",
        items: [
            {
                modalId: "animation-modal-1",
                title: "Submerged",
                mediums: "Real-time 3D (Unreal Engine 5)",
                date: "2026",
                coverThumb: "resources/submerged_1.jpg",
                desc: "This project engages with the themes of hidden social and technological architectures by submerging the Unreal engine City Sample under an ocean of polluted water, illustrating how people seem to persist unbothered in their daily routines even as the world around them collapses. The player spawns as an immobilized ragdoll, unable to move or act, reduced to observing the environment. This perspective highlights how contemporary life is shaped by opaque systems, critiquing how consumption, waste cycles, automation, and luxury shape our everyday existence. The work the work critiques how objects pushed as conveniences usually are most likely in the interest of profit, than global improvements, and lead to both an environmental and social overload. The city therefore represents our normalization of excess, and the invisible mechanisms sustaining and pushing it.",
                slides: [
                    { type: "youtube", videoId: "QJe2xmmnVCs", thumb: "resources/submerged_1.jpg" },
                    { type: "image", src: "resources/submerged_20.jpg", thumb: "resources/submerged_20.jpg" },
                    { type: "image", src: "resources/submerged_2.jpg", thumb: "resources/submerged_2.jpg" },
                    { type: "image", src: "resources/submerged_3.jpg", thumb: "resources/submerged_3.jpg" }
                ]
            },
            {
                modalId: "animation-modal-2",
                title: "Incarnation",
                mediums: "Character Pipeline (Unreal Engine 5)",
                date: "2026",
                coverThumb: "resources/Incarnation_1.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "youtube", videoId: "Ngts96kr_iY", thumb: "resources/Incarnation_1.jpg" },
                    // { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    // { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            },
            {
                modalId: "animation-modal-3",
                title: "Zippociety",
                mediums: "Blender, 3D Modeling & Rendering",
                date: "2025",
                coverThumb: "resources/zip1-min.png",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/zip1-min.png", thumb: "resources/zip1-min.png" },
                    { type: "image", src: "resources/zip2-min.png", thumb: "resources/zip2-min.png" },
                    { type: "image", src: "resources/zip3-min.png", thumb: "resources/zip3-min.png" }
                ]
            }
        ]
    },
    coding: {
        id: "creative-coding",
        title: "Interactive & Creative Coding",
        type: "project_gallery",
        items: [
            {
                modalId: "coding-modal-1",
                title: "Rug City Racer",
                mediums: "Video-Driven Web Game",
                date: "2025",
                linkText: "Play Rug City Racer",
                linkUrl: "https://nimosana.github.io/415/",
                coverThumb: "resources/SplashScreen.webp",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "webpage", url: "https://nimosana.github.io/415/", thumb: "resources/SplashScreen.webp" },
                ]
            },
            {
                modalId: "coding-modal-2",
                title: "Clash of Leadership",
                mediums: "Web, PHP, MongoDB",
                date: "2024",
                coverThumb: "resources/COL1.png",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "youtube", videoId: "dbcybj-Risw", thumb: "resources/COL1.png" },
                    // { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    // { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    // { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            },
            {
                modalId: "coding-modal-3",
                title: "Herculean",
                mediums: "Unreal Engine 5",
                date: "2026",
                coverThumb: "resources/herculean_1.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "youtube", videoId: "ILOVvKyw4F8", thumb: "resources/herculean_1.jpg" },
                    // { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    // { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    // { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            },
            {
                modalId: "coding-modal-4",
                title: "Дронтайм!",
                mediums: "Unity, C#",
                date: "2026",
                coverThumb: "resources/Dronetime_1.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "youtube", videoId: "bId11gdNFEY", thumb: "resources/Dronetime_1.jpg" },
                    // { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    // { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    // { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            },
            {
                modalId: "coding-modal-5",
                title: "Reflections",
                mediums: "Real-Time 3D, Unreal Engine 5",
                date: "2025",
                coverThumb: "resources/Reflections_1.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "youtube", videoId: "Y-WiPhEqYOs", thumb: "resources/Reflections_1.jpg" },
                    { type: "image", src: "resources/Reflections_2.jpg", thumb: "resources/Reflections_2.jpg" },
                    { type: "image", src: "resources/Reflections_3.png", thumb: "resources/Reflections_3.png" },
                    { type: "image", src: "resources/Reflections_4.png", thumb: "resources/Reflections_4.png" }
                ]
            },
        ]
    },
    physical: {
        id: "physical-computing",
        title: "Physical Computing & Fabrication",
        type: "project_gallery",
        items: [
            {
                modalId: "physical-modal-1",
                title: "Parkingz",
                mediums: "3D Fabrication, Game Design",
                date: "2024",
                coverThumb: "resources/parkingz1.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/parkingz1.jpg", thumb: "resources/parkingz1.jpg" },
                    { type: "image", src: "resources/parkingz2.jpg", thumb: "resources/parkingz2.jpg" },
                    { type: "image", src: "resources/parkingz3.jpg", thumb: "resources/parkingz3.jpg" }
                ]
            },
            {
                modalId: "physical-modal-2",
                title: `Nas - Illmatic 12" Vinyl cover redesign`,
                mediums: "Graphic Design, Print",
                date: "2026",
                aspectRatio: "3/2",
                coverThumb: "resources/vinyl1.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/vinyl1.jpg", thumb: "resources/vinyl1.jpg" },
                    { type: "image", src: "resources/vinyl2.jpg", thumb: "resources/vinyl2.jpg" },
                    { type: "image", src: "resources/vinyl3.jpg", thumb: "resources/vinyl3.jpg" },
                    { type: "image", src: "resources/vinyl4.jpg", thumb: "resources/vinyl4.jpg" }

                ]
            },
            {
                modalId: "physical-modal-3",
                title: "ATH-M50x Revival Project",
                mediums: "3D Fabrication",
                date: "2026",
                coverThumb: "resources/n50x.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/n50x.jpg", thumb: "resources/n50x.jpg" },
                    { type: "image", src: "resources/n50x_3.jpg", thumb: "resources/n50x_3.jpg" },
                    { type: "image", src: "resources/n50x_2.jpg", thumb: "resources/n50x_2.jpg" }
                ]
            }
        ]
    }
};
