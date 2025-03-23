<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RsvpCodeSeeder extends Seeder
{
    public function run()
    {
        DB::table('rsvp_codes')->insert([
            [
                'code' => 'FZBZ-7419',
                'invitee' => 'Tanner and Tayla',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'JHTN-4718',
                'invitee' => 'Dale',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'GIEI-2432',
                'invitee' => 'Judy',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'JRJX-8753',
                'invitee' => 'Arron and Luann',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'WWQM-3201',
                'invitee' => 'Danny, Molly, and Nana',
                'user_id' => NULL,
                'expected_party_size' => 3,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'VXKR-5107',
                'invitee' => 'Virgil and Katrina',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'XBPN-7973',
                'invitee' => 'Dan',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'KVEX-6087',
                'invitee' => 'Alan, Bethany, Emmy, Olivia, Cole, and Blaine',
                'user_id' => NULL,
                'expected_party_size' => 6,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'XEIM-3238',
                'invitee' => 'Kent, Megan, Grace, Will, and Leia',
                'user_id' => NULL,
                'expected_party_size' => 5,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'CTIJ-5649',
                'invitee' => 'Joel, Olivia, Ella, Elizabeth, and baby',
                'user_id' => NULL,
                'expected_party_size' => 5,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'PZGI-1091',
                'invitee' => 'Nrett, Star, Makenna, Alexa, and Cruz',
                'user_id' => NULL,
                'expected_party_size' => 5,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'BHNG-7743',
                'invitee' => 'Julie and Zachary',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'OFDS-5687',
                'invitee' => 'Chuck, Lois, Travis, and Jesse',
                'user_id' => NULL,
                'expected_party_size' => 4,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'XZHG-4400',
                'invitee' => 'Grant, Jenn, and Ainsley',
                'user_id' => NULL,
                'expected_party_size' => 3,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'CDAY-2298',
                'invitee' => 'Jake and Katrianne',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'IOHT-5148',
                'invitee' => 'Daryl, Christy, Audrey, and Darcy',
                'user_id' => NULL,
                'expected_party_size' => 4,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'XQTE-8641',
                'invitee' => 'Gene, Lana, Kayla, and Kami',
                'user_id' => NULL,
                'expected_party_size' => 4,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'KADM-7842',
                'invitee' => 'Matt, Shari, and Jesseca',
                'user_id' => NULL,
                'expected_party_size' => 3,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'OFWC-7661',
                'invitee' => 'Breann, Teagan, Dusty, and Shelby',
                'user_id' => NULL,
                'expected_party_size' => 4,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'YDKW-8073',
                'invitee' => 'Deb',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'LCXH-0701',
                'invitee' => 'Derek, Carly, Evie, Drew, and baby',
                'user_id' => NULL,
                'expected_party_size' => 5,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'ZZHY-6491',
                'invitee' => 'Rick and Julie',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'YMZD-6604',
                'invitee' => 'Jared, Chloe, Marian, and Myrah',
                'user_id' => NULL,
                'expected_party_size' => 4,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'QAVL-3004',
                'invitee' => 'Jesse, Cara, Gianna, Everly, and Delaney',
                'user_id' => NULL,
                'expected_party_size' => 5,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'VUAI-2674',
                'invitee' => 'Bob',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'RRDR-9801',
                'invitee' => 'Brantly and Sara',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'PXUZ-6665',
                'invitee' => 'Ryan, Natalina, and Noah',
                'user_id' => NULL,
                'expected_party_size' => 3,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'AQTR-3172',
                'invitee' => 'Nate, Brook, Mae, Noah, and Drake',
                'user_id' => NULL,
                'expected_party_size' => 5,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'XHND-5718',
                'invitee' => 'Michael, Rachel, Chyme, Lillith, Dameon, and Killian',
                'user_id' => NULL,
                'expected_party_size' => 6,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'CVUI-0732',
                'invitee' => 'Denis and Jackie',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'JTBU-3020',
                'invitee' => 'Micah, Brittany, Andrew, and Arlow',
                'user_id' => NULL,
                'expected_party_size' => 4,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'DXAV-1319',
                'invitee' => 'Jeremy and Jesseca',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'EQIQ-6215',
                'invitee' => 'Jeff, Amie, Curtis, Charlie, and Chloe',
                'user_id' => NULL,
                'expected_party_size' => 5,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'MXOT-7823',
                'invitee' => 'Casey, Heidi, Jacob, and Cohen',
                'user_id' => NULL,
                'expected_party_size' => 4,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'YDVE-9537',
                'invitee' => 'Robin, Crystal, Michelle, and Julietta',
                'user_id' => NULL,
                'expected_party_size' => 4,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'ERBV-7765',
                'invitee' => 'Mason and Wife',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'NYPD-7469',
                'invitee' => 'Thad, Ashlyn, and baby',
                'user_id' => NULL,
                'expected_party_size' => 3,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'EUDX-7794',
                'invitee' => 'Charlie and Briley',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'ABMB-6756',
                'invitee' => 'Joe and Julie',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'IOBZ-9401',
                'invitee' => 'Jim and Linda',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'CSKA-7733',
                'invitee' => 'Roy, Eileen, Harry, David, and Mary',
                'user_id' => NULL,
                'expected_party_size' => 5,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'BDKB-0568',
                'invitee' => 'Lee and Patsy',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'FWJU-5785',
                'invitee' => 'Jason, Lindsey, Jonah, and Alliyah',
                'user_id' => NULL,
                'expected_party_size' => 4,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'ZNRB-0819',
                'invitee' => 'Max, Lauren, and Smith',
                'user_id' => NULL,
                'expected_party_size' => 3,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'BKQE-6981',
                'invitee' => 'Bruce and Audrey',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'NXFJ-8199',
                'invitee' => 'Frank',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'RYDB-5378',
                'invitee' => 'Linda',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'EDOV-9072',
                'invitee' => 'Larry and Connie',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'NHBF-2956',
                'invitee' => 'Janet',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'BSFS-5050',
                'invitee' => 'Mark, Renee, Grace, and Brandy',
                'user_id' => NULL,
                'expected_party_size' => 4,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'BYLP-2035',
                'invitee' => 'Bertie',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'BOQO-2784',
                'invitee' => 'Mark, Lana, Ethan, and Tobey',
                'user_id' => NULL,
                'expected_party_size' => 4,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'KWWG-6712',
                'invitee' => 'Elizabeth',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'LRVN-3013',
                'invitee' => 'Kris, Dixie, Hadley, Bailey, and Kolter',
                'user_id' => NULL,
                'expected_party_size' => 5,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'AGCH-4865',
                'invitee' => 'Lydiann',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'JZYY-4801',
                'invitee' => 'Beatrice',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'YAWI-4171',
                'invitee' => 'Larry and Jenny',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'TJFN-3963',
                'invitee' => 'Ben and Patrice',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'GELG-7653',
                'invitee' => 'Marc, Jami, and Tyler',
                'user_id' => NULL,
                'expected_party_size' => 3,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'LCVA-6126',
                'invitee' => 'Pearline',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'FBKA-3000',
                'invitee' => 'Justin and Julie <3',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'LAVQ-8289',
                'invitee' => 'Jaden and Bennett',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'KXAO-3736',
                'invitee' => 'Harrison, Jaryn, and Faye',
                'user_id' => NULL,
                'expected_party_size' => 3,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'KRTE-4989',
                'invitee' => 'Jeff, Angie, and Lydiann',
                'user_id' => NULL,
                'expected_party_size' => 3,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'JKWX-8554',
                'invitee' => 'Kelly',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'MSOC-5270',
                'invitee' => 'Jocelynn',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'XJCB-5736',
                'invitee' => 'Roger and DeAnn',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'UQEY-6389',
                'invitee' => 'Jay, Melody, Lewis',
                'user_id' => NULL,
                'expected_party_size' => 3,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'CWHN-0238',
                'invitee' => 'Timmy, Julie, Wesley, and Aravis',
                'user_id' => NULL,
                'expected_party_size' => 4,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'NJGE-6417',
                'invitee' => 'Lizzy and Caroline',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'MDOQ-8541',
                'invitee' => 'Carson',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'FWSZ-0231',
                'invitee' => 'Willa',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'FFAR-8804',
                'invitee' => 'Blythe and Sophie',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'KORY-9038',
                'invitee' => 'Sidney',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'KFRN-7084',
                'invitee' => 'Alyvia and Miley',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'WAFC-9515',
                'invitee' => 'Anna',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'CHOT-4875',
                'invitee' => 'Benji',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'LQFN-8572',
                'invitee' => 'Weston',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'UPPN-4797',
                'invitee' => 'Justin and Darci',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'RRGE-8613',
                'invitee' => 'Johny and Brittney',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'CRJS-9654',
                'invitee' => 'Craig and Desi',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 0,
                'created_at' => now()
            ],
            [
                'code' => 'OECI-6494',
                'invitee' => 'Jarrett, Bailey, and Beau',
                'user_id' => NULL,
                'expected_party_size' => 3,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'VIKM-2307',
                'invitee' => 'Alex and Jazmyn',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'OULL-1072',
                'invitee' => 'Adam Ziv',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'NOGC-0055',
                'invitee' => 'Aiden',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'VCNP-2210',
                'invitee' => 'Preston and Alana',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'DUDE-6633',
                'invitee' => 'Alex Waitner',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'KSXR-5070',
                'invitee' => 'Prestin',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'ZDRM-2999',
                'invitee' => 'Jackson and Sophia',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'VEIB-9876',
                'invitee' => 'Jayse Yoder',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'YFGR-1892',
                'invitee' => 'Luke',
                'user_id' => NULL,
                'expected_party_size' => 1,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'MOYP-5150',
                'invitee' => 'Leon and Wanda Stutzman',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ],
            [
                'code' => 'DTJA-2503',
                'invitee' => 'Susan and Mr. Susan Wilson',
                'user_id' => NULL,
                'expected_party_size' => 2,
                'actual_party_size' => NULL,
                'is_accepted' => 0,
                'invited_to_both' => 1,
                'created_at' => now()
            ]
        ]);
    }
}
