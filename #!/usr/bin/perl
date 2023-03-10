#!/usr/bin/perl

use strict;
use warnings;

# Define the length of the random string
my $length = 1024;

# Define the characters to use for the random string
my @chars = ('a'..'z', 'A'..'Z', '0'..'9');

# Generate a random string
my $random_string = join '', map { $chars[int rand @chars] } 1..$length;

print "$random_string\n";
system("cat eigenstart"); 