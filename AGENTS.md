<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

The site has two routes: the anchored homepage at `/` and About the Book at `/about`. Header, footer, and section label are shared components (src/components/site-header.tsx, site-footer.tsx, section-label.tsx); cross-page section links use TanStack `Link` with `/#section` paths.
Newsletter subscriptions are stored in Lovable Cloud with insert-only public access; visitors can subscribe without exposing the list.
Book imagery uses cropped derivatives of the supplied full jacket via Lovable Assets, preserving the official artwork without committing image binaries.
