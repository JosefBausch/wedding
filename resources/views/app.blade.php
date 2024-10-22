<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="title" content="Josef and Rose Bausch" />
        <meta name="description" content="Celebrate our love with us! Get all the event details, RSVP, and browse the gift registry. Can't wait to see you!" />

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="josefplusrose.life" />
        <meta property="og:title" content="Josef and Rose Bausch" />
        <meta property="og:description" content="Celebrate our love with us! Get all the event details, RSVP, and browse the gift registry. Can't wait to see you!" />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="josefplusrose.life" />
        <meta property="twitter:title" content="Josef and Rose Bausch" />
        <meta property="twitter:description" content="Celebrate our love with us! Get all the event details, RSVP, and browse the gift registry. Can't wait to see you!" />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="/storage/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/storage/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/storage/favicon-16x16.png">
        <link rel="manifest" href="/storage/site.webmanifest">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+US+Trad:wght@100..400&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+US+Trad:wght@100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-fixed bg-center bg-cover bg-no-repeat bg-parallax">
        @inertia
    </body>
</html>
