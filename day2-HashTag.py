def generate_hashtag(data):
    ans = "#"
    words = data.split()
    for word in words:
        ans += word.capitalize()
    return ans

ans = generate_hashtag("mera naam rohit ha")
print(ans)
