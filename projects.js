const portfolioData = {
    film: {
        id: "film-video",
        title: "Film & Video",
        type: "video_gallery",
        items: [
            { title: "Mon épicier", videoId: "Jz9K6cX3fEY", thumb: "resources/Works/Video/MonEpicier.jpg" },
            { title: "Thermal Shutdown", videoId: "SnsG77LGZvs", thumb: "resources/Works/Video/ThermalShutdown.jpg" },
            { title: "Brick by Brick", videoId: "aFLu1FLZkQE", thumb: "resources/Works/Video/BrickByBrick.jpg" },
            { title: "L'exposition Abandonnée", videoId: "-pJ0PG24Od4", thumb: "resources/Works/Video/ExpoAbandonnee.jpg" },
            { title: "The city, the body", videoId: "G0hbverd19M", thumb: "resources/Works/Video/CityBody.jpg" },
            { title: "Les rues de Montréal", videoId: "-J4v9c1_ru8", thumb: "resources/Works/Video/RuesDeMTL.jpg" },
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
                coverThumb: "resources/Works/Photo/PSEditing.jpg",
                gridImage: "resources/Works/Photo/PSEditing.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "comparison", beforeSrc: "resources/Works/Photo/triptych_before.jpg", afterSrc: "resources/Works/Photo/triptych_after.jpg", thumb: "resources/Works/Photo/triptych_after.jpg" },
                    { type: "comparison", beforeSrc: "resources/Works/Photo/highres_scan.jpg", afterSrc: "resources/Works/Photo/highres_scan_after.jpg", thumb: "resources/Works/Photo/highres_scan_after.jpg" },
                    { type: "image", src: "resources/Works/Coding/SplashScreen.webp", thumb: "resources/Works/Coding/SplashScreen.webp" },
                ]
            },
            // {
            //     modalId: "photo-modal-2",
            //     title: "Photography Project 2",
            //     mediums: "Tech A, Tech B",
            //     date: "2026",
            //     coverThumb: "resources/submerged_20.jpg",
            //     gridImage: "resources/photography_project_1_1776021263989.png",
            //     desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
            //     slides: [
            //         { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
            //         { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
            //         { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
            //     ]
            // },
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
                coverThumb: "resources/Works/3D/submerged_1.jpg",
                desc: "This project engages with the themes of hidden social and technological architectures by submerging the Unreal engine City Sample under an ocean of polluted water, illustrating how people seem to persist unbothered in their daily routines even as the world around them collapses. The player spawns as an immobilized ragdoll, unable to move or act, reduced to observing the environment. This perspective highlights how contemporary life is shaped by opaque systems, critiquing how consumption, waste cycles, automation, and luxury shape our everyday existence. The work the work critiques how objects pushed as conveniences usually are most likely in the interest of profit, than global improvements, and lead to both an environmental and social overload. The city therefore represents our normalization of excess, and the invisible mechanisms sustaining and pushing it.",
                slides: [
                    { type: "youtube", videoId: "QJe2xmmnVCs", thumb: "resources/Works/3D/submerged_1.jpg" },
                    { type: "image", src: "resources/Works/3D/submerged_20.jpg", thumb: "resources/Works/3D/submerged_20.jpg" },
                    { type: "image", src: "resources/Works/3D/submerged_2.jpg", thumb: "resources/Works/3D/submerged_2.jpg" },
                    { type: "image", src: "resources/Works/3D/submerged_3.jpg", thumb: "resources/Works/3D/submerged_3.jpg" }
                ]
            },
            {
                modalId: "animation-modal-2",
                title: "Incarnation",
                mediums: "Character Pipeline (Unreal Engine 5)",
                date: "2026",
                coverThumb: "resources/Works/3D/Incarnation_1.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "youtube", videoId: "Ngts96kr_iY", thumb: "resources/Works/3D/Incarnation_1.jpg" },
                ]
            },
            {
                modalId: "animation-modal-3",
                title: "Zippociety",
                mediums: "Blender, 3D Modeling & Rendering",
                date: "2025",
                coverThumb: "resources/Works/3D/zip1-min.png",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/Works/3D/zip1-min.png", thumb: "resources/Works/3D/zip1-min.png" },
                    { type: "image", src: "resources/Works/3D/zip2-min.png", thumb: "resources/Works/3D/zip2-min.png" },
                    { type: "image", src: "resources/Works/3D/zip3-min.png", thumb: "resources/Works/3D/zip3-min.png" }
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
                coverThumb: "resources/Works/Coding/SplashScreen.webp",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "webpage", url: "https://nimosana.github.io/415/", thumb: "resources/Works/Coding/SplashScreen.webp" },
                ]
            },
            {
                modalId: "coding-modal-2",
                title: "Clash of Leadership",
                mediums: "Web, PHP, MongoDB",
                date: "2024",
                coverThumb: "resources/Works/Coding/COL1.png",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "youtube", videoId: "dbcybj-Risw", thumb: "resources/Works/Coding/COL1.png" },
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
                coverThumb: "resources/Works/Coding/herculean_1.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "youtube", videoId: "ILOVvKyw4F8", thumb: "resources/Works/Coding/herculean_1.jpg" },
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
                coverThumb: "resources/Works/Coding/Dronetime_1.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "youtube", videoId: "bId11gdNFEY", thumb: "resources/Works/Coding/Dronetime_1.jpg" },
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
                coverThumb: "resources/Works/Coding/Reflections_1.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "youtube", videoId: "Y-WiPhEqYOs", thumb: "resources/Works/Coding/Reflections_1.jpg" },
                    { type: "image", src: "resources/Works/Coding/Reflections_2.jpg", thumb: "resources/Works/Coding/Reflections_2.jpg" },
                    { type: "image", src: "resources/Works/Coding/Reflections_3.png", thumb: "resources/Works/Coding/Reflections_3.png" },
                    { type: "image", src: "resources/Works/Coding/Reflections_4.png", thumb: "resources/Works/Coding/Reflections_4.png" }
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
                coverThumb: "resources/Works/Physical/parkingz1.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/Works/Physical/parkingz1.jpg", thumb: "resources/Works/Physical/parkingz1.jpg" },
                    { type: "image", src: "resources/Works/Physical/parkingz2.jpg", thumb: "resources/Works/Physical/parkingz2.jpg" },
                    { type: "image", src: "resources/Works/Physical/parkingz3.jpg", thumb: "resources/Works/Physical/parkingz3.jpg" }
                ]
            },
            {
                modalId: "physical-modal-2",
                title: `Nas - Illmatic 12" Vinyl cover redesign`,
                mediums: "Graphic Design, Print",
                date: "2026",
                aspectRatio: "3/2",
                coverThumb: "resources/Works/Physical/vinyl1.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/Works/Physical/vinyl1.jpg", thumb: "resources/Works/Physical/vinyl1.jpg" },
                    { type: "image", src: "resources/Works/Physical/vinyl2.jpg", thumb: "resources/Works/Physical/vinyl2.jpg" },
                    { type: "image", src: "resources/Works/Physical/vinyl3.jpg", thumb: "resources/Works/Physical/vinyl3.jpg" },
                    { type: "image", src: "resources/Works/Physical/vinyl4.jpg", thumb: "resources/Works/Physical/vinyl4.jpg" }

                ]
            },
            {
                modalId: "physical-modal-3",
                title: "ATH-M50x Revival Project",
                mediums: "3D Fabrication",
                date: "2026",
                coverThumb: "resources/Works/Physical/n50x.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/Works/Physical/n50x.jpg", thumb: "resources/Works/Physical/n50x.jpg" },
                    { type: "image", src: "resources/Works/Physical/n50x_3.jpg", thumb: "resources/Works/Physical/n50x_3.jpg" },
                    { type: "image", src: "resources/Works/Physical/n50x_2.jpg", thumb: "resources/Works/Physical/n50x_2.jpg" }
                ]
            }
        ]
    }
};
